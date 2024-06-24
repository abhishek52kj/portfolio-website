const Stack = () => {
  const stacks = [
    { name: "Framer", type: "Web design" },
    { name: "Typefully", type: "Web design" },
    { name: "Overrides", type: "Web design" },
    { name: "Circle", type: "Web design" },
    // { name: "Iconists", type: "Web design" },
    // { name: "Screen Studio", type: "Web design" },
    // { name: "Relume", type: "Web design" },
    // { name: "Cleanshot", type: "Web design" },
    // { name: "Helpscout", type: "Web design" },
    // { name: "Figma", type: "Web design" }
  ];

  return (
    <section id="stack" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">Stack</h2>
      <ul className="space-y-2">
        {stacks.map((stack, index) => (
          <li key={index}>{stack.name} <span className="text-gray-400">{stack.type}</span></li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
