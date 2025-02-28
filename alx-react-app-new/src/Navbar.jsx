const Navbar = () => {
  let title = "hello";
  let isTitle = true;
  return (
    <nav>
      <h1>Dojo Blog</h1>
      <div className="links">
        <p>{title}</p>
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
