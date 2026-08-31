import Container from "@/components/Container";

const Navbar = () => {
  return (
    <Container className="md:p-0">
      <nav role="navigation" className="flex flex-row gap-3 items-center">
        <img
          src="/avatar-180.webp"
          width={60}
          height={60}
          alt="Abhirup Datta"
          className="size-15 rounded-full object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
          Hi, I am Abhirup
        </h1>
      </nav>
    </Container>
  );
};
export default Navbar;
