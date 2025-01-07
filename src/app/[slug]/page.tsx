export default function NotFound() {
  return (
    <main className="pt-[250px] bg-sgray min-h-screen">
      <h1 className="font-bold text-6xl text-white border-b-4 border-b-orange-400 mb-12 max-w-6xl mx-auto px-6">Attans! Den sidan finns faktiskt inte</h1>
      <section className=" p-12 bg-white relative text-black flex flex-row-reverse flex-wrap-reverse justify-center items-center gap-12">
        <p className="max-w-xl">
          Inget kunde hittas här. Kanske kan du prova nån av länkarna i menyn?
        </p>
      </section>
    </main >
  );
}
