import { motion } from "framer-motion";

const Links = () => {
  const items = [
    { name: "Homepage", id: "Homepage" },
    { name: "Introduzione", id: "Introduzione" },
    { name: "Ciclo del motore", id: "The engine cycle" },
    { name: "Alimentazione", id: "Carburatore" },
    { name: "Gruppo termico", id: "GruppoTermico" },
    { name: "Organi meccanici", id: "OrganiMeccanici" },
    { name: "Trasmissione", id: "Trasmissione" },
    { name: "Raffreddamento", id: "Raffreddamento" },
    { name: "Contatti", id: "Contact" },
  ];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.id}`}
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
