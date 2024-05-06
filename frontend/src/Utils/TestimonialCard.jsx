/* eslint-disable react/prop-types */
// Testimonial Card Component

const TestimonialCard = ({ message, pictureUrl, name, role, reviewStars }) => {
  return (
    <div className="w-[340px] sm:w-[384px] max-w-[384px] h-[254px] p-5 text-sm bg-slate-50 flex-none overflow-hidden relative cursor-pointer hover:shadow-2xl hover:rounded-md  transition ease-in dark:shadow-4xl mb-3">
      <p className="w-full mt-4">{message}</p>

      {/*  */}
      <section className="h-[30%] w-full absolute bottom-0 left-0 flex justify-between p-3 px-6">
        <div className="flex gap-2">
          <img src={pictureUrl} alt={name} className="h-full" />

          {/*  */}
          <div className="text-left">
            <p className="text-base font-bold">{name}</p>
            <p>{role}</p>
          </div>

          {/*  */}
        </div>

        <p>{"⭐".repeat(reviewStars)}</p>
      </section>
    </div>
  );
};

export default TestimonialCard;
