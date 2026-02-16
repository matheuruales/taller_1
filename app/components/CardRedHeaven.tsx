export function CardRedHeaven() {
  return (
    <article className="max-w-sm bg-white rounded-2xl shadow-lg border border-red-200 overflow-hidden mx-auto" style={{ boxShadow: '0 4px 16px 0 rgba(255, 87, 87, 0.15)' }}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
        alt="Mountain landscape"
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col gap-4 px-6 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-black">Red Heaven</h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="bg-red-400 text-white rounded-full px-4 py-1 text-sm font-semibold">#tailwind</span>
          <span className="bg-red-400 text-white rounded-full px-4 py-1 text-sm font-semibold">#frontendeverything</span>
        </div>
      </div>
    </article>
  );
}
