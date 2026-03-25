import Container from "@/components/Container";

const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <Container>
      <nav className="flex items-center justify-between">
        <img
          src="/my-photo.png"
          height={"100"}
          width={"100"}
          alt="avatar"
          className="size-15 rounded-full object-cover"
        />
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <a href={item.href} key={item.title} className="text-sm">
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </Container>
  );
};
export default Navbar;
