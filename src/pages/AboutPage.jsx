export default function AboutPage() {
    return (
      <section className="container mx-auto mt-8 flex flex-col items-center px-4">
        <h1 className="text-2xl font-bold text-center font-boldPoppins">About</h1>

        <div className="w-full flex justify-center mt-4 max-w-2xl">
          <p className="text-base text-neutral-800 text-left font-careem">
            The Future Blog is a project along with the Odin Project. I decided to make this project to share my web development journey, both with the Odin Project and independently, and to share experiences in the future.
          </p>
        </div>

            
        <div className="w-full flex justify-center mt-6 max-w-2xl">
          <p className="text-base text-neutral-800 text-left mt-2 font-careem">
            The goal of this blog is to improve my skills in Express js by building an API and to document my journey of learning.
          </p>
        </div>

        <div className="w-full flex justify-center mt-6 max-w-2xl">
          <p className="text-base text-neutral-800 text-left mt-2 font-careem">
            I would love to hear from you! Feel free to reach out through my LinkedIn. Let&apos;s connect and share our experiences.
          </p>
        </div>


        <footer className="w-full flex justify-center mt-12 max-w-2xl border-t pt-4">
            <p className="text-base text-neutral-600 text-center font-boldPoppins">
              Built by Muha
            </p>
        </footer>

      </section>
    );
}
