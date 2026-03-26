import Container from "@/components/Container";

const Navbar = () => {
  return (
    <Container className="md:p-0">
      <nav className="flex justify-ce flex-row md:flex-col gap-3 md:items-start items-center">
        <img
          src="/my-photo.png"
          height={"100"}
          width={"100"}
          alt="avatar"
          className="size-15 rounded-full object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          Hi, I am Abhirup
        </h1>
      </nav>
    </Container>
  );
};
export default Navbar;
