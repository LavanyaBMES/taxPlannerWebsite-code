"use client";
import { useState, useEffect } from "react";
import { Box, Container, Flex, Image, IconButton, Button } from "@chakra-ui/react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubMenuItem {
  label: string;
  href: string;
  id: number;
  subItems1?: MenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobilebackgroundView, setIsMobilebackgroundView] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
   
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 991);
      setIsMobilebackgroundView(window.innerWidth <= 650);
    };
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleToggleServiceMenu = () => setIsServiceMenuOpen(!isServiceMenuOpen);

  const handleServiceLinkClick = () => {
    if (isMobileView) {
      setIsMobileMenuOpen(false); // Close mobile menu
      setIsServiceMenuOpen(!isServiceMenuOpen); // Toggle service submenu
    }
  };
  

  const handleServicesMouseEnter = () => {
    setIsServiceMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServiceMenuOpen(false);
  };

  const handleServicesClick = () => {
    if (isMobileView) {
      setIsServiceMenuOpen(!isServiceMenuOpen); // Toggle service submenu
    }
  };

  const handleSubMenuItemClick = (id: number) => {
    setSelectedSubMenu(id === selectedSubMenu ? null : id);
  };

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "#",
      subItems: [
        {
          id: 1,
          label: "Income Tax",
          href: "/income-tax",
          subItems1: [
            {
              label: "Salaried and House Property Income",
              href: "/salary-house-property",
            },
            {
              label: "Capital Gain",
              href: "/capital-gain",
            },
            {
              label: "NRI",
              href: "/nri",
            },
            {
              label: "Business Or Profession",
              href: "/business",
            },
            {
              label: "TDS/TCS",
              href: "/tds-tcs",
            },
          ],
        },
        {
          id: 12,
          label: "GST",
          href: "/gst",
          subItems1: [
            {
              label: "Registration",
              href: "/registration",
            },
            {
              label: "Amendments",
              href: "/amendments",
            },
            {
              label: "GST Returns",
              href: "/gst-return-services",
            },
            {
              label: "LUT",
              href: "/lut",
            },
            {
              label: "Refunds",
              href: "/gst-refund",
            },
          ],
        },
        {
          id: 24,
          label: "Incorporation",
          href: "/incorporation",
          subItems1: [
            {
              label: "Company",
              href: "/incorporation-company",
            },
            {
              label: "LLP",
              href: "/incorporation-llp",
            },
            {
              label: "Partnership",
              href: "/incorporation-partnership",
            },
          ],
        },
        {
          id: 32,
          label: "Other Services",
          href: "/other-services",
          subItems1: [
            {
              label: "MSME Registration",
              href: "/msme-registration",
            },
            {
              label: "IEC Registration / Renewal",
              href: "/iec-registration-renewal",
            },
            {
              label: "DSC",
              href: "/dsc-services",
            },
            {
              label: "ROC Filling",
              href: "/roc-filling",
            },
            {
              label: "SFT",
              href: "/sft",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
 

  return (
    <>
   
   <Box
      bg={(pathname === "/" && isMobilebackgroundView) || isScrolled ? "white" : "transparent"}
      py="3"
      position={isScrolled ? "fixed" : (pathname === "/" && isMobilebackgroundView) ? "relative" : "fixed"}
      width="100%"
      zIndex="998"
      shadow={isScrolled ? "0px 8px 6px rgba(0, 0, 0, 0.1)" : "none"}
      
  >
  <Container maxW="container.xxl" px={{base:2,lg:12}}>
        <Flex justify="space-between" alignItems="center">
          {/* Logo */}
          <Box>
            <Link href="/">
              <Flex align="center">
                <Box>
                  <Image
                    src="/assets/Taxplanner-logo.png"
                    height="80px"
                    width="80px"
                    alt=""
                  />
                </Box>
                <Box
                  as="h2"
                  fontWeight={700}
                  color="#01ACF1"
                  whiteSpace="nowrap"
                >
                  Tax Planner
                </Box>
              </Flex>
            </Link>
          </Box>
          
          {/* Mobile menu button */}
          <IconButton
            borderColor="#DFE4FD"
            padding="1rem"
            borderWidth="1px"
            borderRadius="8px"
            aria-label="Open Menu"
            display={{ base: "block",md: "block",lg: "none" }}
            onClick={handleToggleMobileMenu}
            icon={<FaBars size={24} color="#0000008C" style={{marginTop:"-8px"}}/>}
            bg="white"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
          
          {/* Mobile menu */}
          <Box
            display={{ base: isMobileMenuOpen ? "block" : "none",md: isMobileMenuOpen ? "block" : "none", lg:"none" }}
            position="absolute"
            top={isMobileView ? "calc(100% + 20px)" : "100%"}
            right="0"
            bg="#fff"
            left="0"
            zIndex="999"
            boxShadow="md"
          >
            <Box px="10" py="10">
              <Flex direction="column" alignItems="flex-start">
                {menuItems.map((menuItem, index) => (
                  <Box key={index} mb="4">
                    {menuItem.subItems ? (
                      <Box>
                        <Box
                          onClick={
                            menuItem.label === "Services"
                              ? handleServicesClick
                              : handleToggleServiceMenu
                          }
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          {menuItem.label}
                          {menuItem.label === "Services" && (
                            <FaAngleDown
                              size={24}
                              color="#555555"
                              style={{ marginLeft: "3"}}
                            />
                          )}
                        </Box>
                        {isServiceMenuOpen && menuItem.label === "Services" && (
                          <Box
                            mt="2"
                            width={"100%"}
                            minWidth={{base:"200px",sm:"300px"}}
                            py="4"
                            bg="white"
                            borderColor="#DFE4FD"
                            borderWidth="1px"
                            rounded={"8px"}
                          >
                            {menuItem.subItems.map((subItem, subIndex) => (
                              <Box
                                key={subIndex}
                                mt="1"
                                px={"2"}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                width={"100%"}
                                onClick={() => handleSubMenuItemClick(subItem.id)}
                                position={"relative"}
                                flexDirection={"column"}
                              >
                                <Flex width={"100%"} padding ="5" _hover={{ bg: "#F0F0F0" }}>
                                  <Link href={subItem.href}>
                                    {subItem.label}
                                  </Link>
                                  <FaAngleDown
                                    size={24}
                                    color="#555555"
                                    style={{ position: "absolute", right: 20 }}
                                  />
                                </Flex>
                                {selectedSubMenu === subItem.id && (
                                       <Box
                                         mt="4"
                                         padding={2}
                                         minWidth="300px"
                                         borderColor="#DFE4FD"
                                         borderWidth="1px"
                                         rounded={"8px"}>
                                    {subItem.subItems1?.map((item, index) => (
                                      <Box
                                        p="3"
                                        key={index}
                                        display={"flex"}
                                        flexDirection={"column"}
                                        _hover={{ bg: "#F0F0F0" }}
                                      >
                                        <Link href={item.href}>{item.label}</Link>
                                      </Box>
                                    ))}
                                  </Box>
                                )}
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <Link href={menuItem.href}>{menuItem.label}</Link>
                    )}
                  </Box>
                ))}
                <Button
                  fontSize="16px"
                  fontWeight="500"
                  color="#DFE4FD"
                  py="3"
                  px="5"
                  bg="#2D50D6"
                  _hover={{bg:"#2D50D6"}}
                >
                  Login
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* Desktop menu */}
          <Box
            display={{ base: "none", md: "none",lg:"block" }}
            fontFamily="'Open Sans', sans-serif"
          >
            <Flex align="center" color="#555555" fontWeight="500">
              {menuItems.map((menuItem, index) => (
                <Box
                  key={index}
                  ml="4"
                  padding="2"
                  position="relative"
                  onMouseEnter={
                    menuItem.label === "Services"
                      ? handleServicesMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    menuItem.label === "Services"
                      ? handleServicesMouseLeave
                      : undefined
                  }
                >
                  <Link
                    href={menuItem.href}
                    onClick={handleServiceLinkClick}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {menuItem.label}
                    {menuItem.label === "Services" && (
                      <FaAngleDown
                        size={16}
                        color="#555555"
                        style={{ marginLeft: "3",marginTop:"4px" }}
                      />
                    )}
                  </Link>
                  {menuItem.subItems &&
                    isServiceMenuOpen &&
                    menuItem.label === "Services" && (
                      <Box
                        position="absolute"
                        top="100%"
                        left="0"
                        bg="white"
                        borderColor="#DFE4FD"
                        borderWidth="1px"
                        borderRadius="8px"
                        py="2"
                        zIndex="99"
                        minWidth="200px"
                      >
                        {menuItem.subItems.map((subItem, subIndex) => (
                          <Box
                            key={subIndex}
                            mt="1"
                            py={3}
                            px="5"
                            _hover={{ bg: "#F0F0F0" }}
                            display="flex"
                            alignItems="center"
                            onMouseEnter={() => handleSubMenuItemClick(subItem.id)}
                            position={"relative"}
                          >
                            <Link href={subItem.href}>{subItem.label}</Link>
                            <Box>
                              <FaAngleDown
                                size={16}
                                color="#555555"
                                style={{ marginLeft: "5" ,marginTop:"4px"}}
                              />
                            </Box>
                            {selectedSubMenu === subItem.id && (
                              <Box
                                mt="1"
                                p={2}
                                bg={"#fff"}
                                width={"170px"}
                                display="flex"
                                position={"absolute"}
                                right={"100%"}
                                top={"0"}
                                flexDirection={"column"}
                                rounded={"8px"}
                                border={"1px solid #F0F0F0"}
                                onMouseLeave={() => setSelectedSubMenu(null)}
                                transition={"0.5s"}
                              >
                                {subItem.subItems1?.map((item, index) => (
                                  <Flex
                                    key={index}
                                    p={2}
                                    mt={"1"}
                                    _hover={{ bg: "#F0F0F0" }}
                                    width={"100%"}
                                  >
                                    <Link href={item.href}>{item.label}</Link>
                                  </Flex>
                                ))}
                              </Box>
                            )}
                          </Box>
                        ))}
                      </Box>
                    )}
                </Box>
              ))}

              <Button
                ml="4"
                fontSize="16px"
                fontWeight="500"
                color="#DFE4FD"
                py="5"
                px="5"
                bg="#2D50D6"
                _hover={{bg:"#2D50D6"}}
              >
                Login
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
    </>
  );
};

export default Navbar;

