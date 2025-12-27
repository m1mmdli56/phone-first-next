import { getIPhones } from "@/src/services/iphoneService";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const iphones = await getIPhones();

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 tracking-wide">
        📱 iPhone Modelləri
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {iphones?.map((phone) => (
          <Link
            key={phone.id}
            href={`/iphone/${phone.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center"
          >
            {/* Şəkil və fallback */}
            {phone.image ? (
              <Link href={`/iphone/${phone.id}`}>
                <Image
                  src={phone.image}
                  alt={phone.model}
                  width={200}
                  height={200}
                  loading="eager"
                  className="w-50 h-40 rounded-xl object-cover mb-4 hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-500 mb-4">
                Şəkil yoxdur
              </div>
            )}

            {/* Qiymət */}
            <p className="text-lg font-bold text-indigo-600 mb-1">
              ${phone.price}
            </p>

            {/* Model və yaddaş */}
            <p className="text-sm text-gray-800 text-center font-medium mb-1">
              {phone.model} {phone.storage?.[0]}/{phone.ram || "8GB"}
            </p>

            {/* Şəhər və vaxt */}
            <p className="text-xs text-gray-500">Bakı, bugün, 14:23</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
