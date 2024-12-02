const Consaltation = () => {
    return (
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book a Consultation</h2>
                <p className="text-xl text-purple-100">
                  Ready to take your business to the next level? Our experts are here to help.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                  <form className="space-y-4">
                    <input 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input 
                      placeholder="Your Email" 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea 
                      placeholder="Tell us about your project" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                     <button 
                    type="submit" 
                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consaltation;


