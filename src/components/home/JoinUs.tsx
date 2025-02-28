import { motion } from 'framer-motion';
import { MailPlus, Handshake, Rocket } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Join Our Waitlist',
    description: 'for early access to BodhiMindAI '
  },
  {
    icon: MailPlus,
    title: 'Get updates',
    description: 'on the progresses of our project'
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'to shape the future of AI-driven compliance & decision intelligence '
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#eba569] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Join Us on This Journey!</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver outstanding results.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mx-auto h-12 w-12 text-white">
                <feature.icon className="h-full w-full" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}