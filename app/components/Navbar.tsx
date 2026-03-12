"use client";

import { useState } from "react";
import { Button, Dropdown, Label } from "@heroui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Our Tours",
      href: "#",
      dropdown: [
        { name: "Day Tours", href: "/products/web" },
        { name: "Niagara Falls Tours", href: "/products/mobile" },
        { name: "Multi City Tours", href: "/products/desktop" },
        { name: "Canadian Tours", href: "/products/desktop" },
        { name: "USA Tours", href: "/products/desktop" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Our Cities", href: "/cities" },
    { name: "Reviews", href: "/reviews" },
  ];

  return (
    <nav className="fixed top-10 left-0 right-0 z-50">
      {/* Dark gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image
                src="/zoomtours_logo.webp"
                alt="Logo"
                width={100}
                height={50}
                className="drop-shadow-lg"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <Dropdown>
                    <Button
                      aria-label={item.name}
                      variant="light"
                      className="font-medium text-white hover:text-white/90 [&]:text-white"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                      {item.name}
                    </Button>
                    <Dropdown.Popover>
                      <Dropdown.Menu
                        onAction={(key) => (window.location.href = key)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Dropdown.Item
                            key={subItem.href}
                            id={subItem.href}
                            textValue={subItem.name}
                          >
                            <Label>{subItem.name}</Label>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-white hover:text-white/90 rounded-lg hover:bg-white/10 transition-colors"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="primary"
              className="shadow-lg"
            >
              Book Now
            </Button>
            <Button 
              variant="bordered"
              className="text-white border-white hover:bg-white/10 shadow-lg"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <Dropdown>
                    <Button
                      aria-label={item.name}
                      variant="light"
                      className="w-full justify-start font-medium text-white"
                    >
                      {item.name}
                    </Button>
                    <Dropdown.Popover>
                      <Dropdown.Menu
                        onAction={(key) => (window.location.href = key)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Dropdown.Item
                            key={subItem.href}
                            id={subItem.href}
                            textValue={subItem.name}
                          >
                            <Label>{subItem.name}</Label>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            <div className="pt-4 space-y-2">
              <Button variant="primary" className="w-full font-medium">
                Book Now
              </Button>
              <Button 
                variant="bordered"
                className="w-full font-medium text-white border-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}