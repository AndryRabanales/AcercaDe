import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer"; // nuevo

// cadena de conexión a MongoDB Atlas
const MONGO_URI = "mongodb+srv://rabanalesandry2:v5BDcW2PaRvM1AnN@cluster0.ag9tskq.mongodb.net/contactos?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error conectando a MongoDB", err));

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// esquema Mongoose
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

// nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rabanalesdevmark@gmail.com", // remplaza aquí tu correo
    pass: "xwqv lbfu jhqn ltab",    // la contraseña de aplicación
  },
});

// endpoint POST
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("💾 Guardado en MongoDB:", newContact);

    // enviar correo
    await transporter.sendMail({
      from: '"DevMarketing" <TU_CORREO@gmail.com>', // remplaza tu correo
      to: "rabanalesdevmark@gmail.com", // tu propio correo
      subject: "Nuevo mensaje recibido",
      text: `
        Nombre: ${name}
        Correo: ${email}
        Mensaje: ${message}
      `,
    });

    console.log("✅ Correo de confirmación enviado");

    res.json({
      status: "ok",
      message: "Mensaje guardado y correo enviado correctamente",
    });
  } catch (error) {
    console.error("❌ Error al procesar contacto:", error);
    res.status(500).json({
      status: "error",
      message: "Error al guardar o enviar el correo",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
