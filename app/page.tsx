import certifications from "@/data/certifications.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-6xl font-black text-center mb-3">
          クソ資格
        </h1>
        <p className="text-center text-gray-600 mb-12 text-xl">
          誰も知らない資格を集めました
        </p>

        <div className="grid grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={`/${cert.id}`}
              className="aspect-square p-6 border-2 border-black hover:bg-gray-100 transition-colors flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{cert.name}</h2>
              <p className="text-gray-600">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
