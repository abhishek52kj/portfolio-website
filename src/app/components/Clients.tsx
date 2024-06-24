const Clients = () => {
  const clients = [
    { name: "Bluesky", type: "Visual design" },
    { name: "Diagram", type: "Web design" },
    { name: "Figma", type: "Visual design" }
  ];

  return (
    <section id="clients" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">Clients</h2>
      <ul className="space-y-2">
        {clients.map((client, index) => (
          <li key={index}>{client.name} <span className="text-gray-400">{client.type}</span></li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
