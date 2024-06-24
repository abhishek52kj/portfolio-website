const Channels = () => {
  const channels = [
    { name: "Twitter", type: "Visual design" },
    { name: "LinkedIn", type: "Visual design" },
    { name: "Medium", type: "Visual design" },
    { name: "Substack", type: "Visual design" },
    { name: "Threads", type: "Visual design" },
    { name: "Apple Music", type: "Visual design" }
  ];

  return (
    <section id="channels" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">Channels</h2>
      <ul className="space-y-2">
        {channels.map((channel, index) => (
          <li key={index}>{channel.name} <span className="text-gray-400">{channel.type}</span></li>
        ))}
      </ul>
    </section>
  );
};

export default Channels;
