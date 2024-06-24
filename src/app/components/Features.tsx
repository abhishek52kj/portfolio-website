const Features = () => {
  const features = [
    { name: "Config", year: "22" },
    { name: "Hatch Conference", year: "23" },
    { name: "Wall Street Journal", year: "23" },
    { name: "New York Times", year: "22" },
    { name: "Macworld", year: "23" }
  ];

  return (
    <section id="features" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">Features</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature.name} <span className="text-gray-400">{feature.year}</span></li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
