import { motion } from 'framer-motion';
import { services } from '../../services'; // Import the services array

function Services() {
  // Ensure unique titles within the imported services array
  const uniqueServices = services.filter((service, index, self) =>
    index === self.findIndex((t) => (
      t.title === service.title
    ))
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 "
        >
          <h2 className="text-3xl font-bold text-[#eba569] mb-4">
            What we are building
          </h2>
          <h3 className="text-xl text-gray-800 max-w-2xl mx-auto">
            Our Hive Mind Agents will:
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uniqueServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center h-full"
            >
              <service.icon className="h-12 w-12 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <br />
        <br />
        <h3 className="text-xl text-gray-800 max-w-2xl mx-auto text-center">
          We are currently in <b className='fond-bold text-[#eba569]'>early development</b> and working on bringing these capabilities to life.
        </h3>
      </div>
    </section>
  );
}

export default Services;