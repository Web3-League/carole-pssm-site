import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Award,
  Heart,
  Brain,
  Shield,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    formation: "PSSM Standard",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          formation: formData.formation,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          formation: "PSSM Standard",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(""), 5000);
  };

  // SVG Components intégrés
  // SVG Components intégrés
  const PSMLogoSVG = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <defs>
        <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Cercle principal */}
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="url(#modernGradient)"
        opacity="0.1"
      />

      {/* Trois cercles connectés - symbolisant le soutien */}
      <circle
        cx="45"
        cy="50"
        r="12"
        fill="url(#modernGradient)"
        opacity="0.8"
      />
      <circle
        cx="75"
        cy="50"
        r="12"
        fill="url(#modernGradient)"
        opacity="0.6"
      />
      <circle
        cx="60"
        cy="75"
        r="12"
        fill="url(#modernGradient)"
        opacity="0.9"
      />

      {/* Lignes de connexion subtiles */}
      <line
        x1="45"
        y1="50"
        x2="75"
        y2="50"
        stroke="#6366f1"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="52"
        y1="62"
        x2="68"
        y2="62"
        stroke="#6366f1"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Petit cœur central simple */}
      <path
        d="M60 65 Q58 63 56 65 Q58 67 60 69 Q62 67 64 65 Q62 63 60 65"
        fill="#ec4899"
        opacity="0.8"
      />
    </svg>
  );

  const WellbeingSVG = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
      <circle
        cx="40"
        cy="40"
        r="35"
        fill="#ecfdf5"
        stroke="#10b981"
        strokeWidth="2"
      />
      <path
        d="M40 15 L45 30 L60 30 L50 40 L55 55 L40 45 L25 55 L30 40 L20 30 L35 30 Z"
        fill="#10b981"
        opacity="0.7"
      />
      <circle cx="40" cy="40" r="8" fill="#047857" />
      <circle cx="40" cy="40" r="4" fill="#ffffff" />
    </svg>
  );

  const SupportSVG = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
      <circle cx="40" cy="35" r="12" fill="#ddd6fe" />
      <path d="M40 47 Q30 50 25 60 L55 60 Q50 50 40 47" fill="#8b5cf6" />
      <circle cx="25" cy="25" r="8" fill="#c4b5fd" opacity="0.7" />
      <circle cx="55" cy="25" r="8" fill="#c4b5fd" opacity="0.7" />
      <path
        d="M20 35 Q15 40 20 45"
        stroke="#8b5cf6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M60 35 Q65 40 60 45"
        stroke="#8b5cf6"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  const TrainingSVG = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
      <rect
        x="15"
        y="20"
        width="50"
        height="40"
        rx="5"
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <rect x="20" y="25" width="40" height="2" fill="#f59e0b" />
      <rect x="20" y="30" width="30" height="2" fill="#f59e0b" />
      <rect x="20" y="35" width="35" height="2" fill="#f59e0b" />
      <circle cx="55" cy="45" r="8" fill="#ef4444" />
      <path d="M55 40 L55 50 M50 45 L60 45" stroke="white" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  PSSM Formation
                </h1>
                <p className="text-sm text-gray-600">
                  Premiers Secours Santé Mentale
                </p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#accueil"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Formations
              </a>
              <a
                href="#apropos"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                À propos
              </a>
              <a
                href="#temoignages"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-full h-0.5 bg-gray-600"></span>
                <span className="block w-full h-0.5 bg-gray-600"></span>
                <span className="block w-full h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 py-2 space-y-2">
            <a
              href="#accueil"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Formations
            </a>
            <a
              href="#apropos"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              À propos
            </a>
            <a
              href="#temoignages"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Témoignages
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="accueil"
        className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <PSMLogoSVG />
            <h2 className="text-5xl font-bold text-gray-900 mb-6 mt-8">
              Formatrice Accréditée
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                PSSM France
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Devenez secouriste pour aider les personnes qui présentent des
              signes de troubles psychiques. Formations qualifiantes aux
              Premiers Secours en Santé Mentale pour évaluer, soutenir et
              orienter les personnes en difficultés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Découvrir la formation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Formation PSSM
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une formation officielle adaptée pour développer vos compétences
              en premiers secours en santé mentale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <WellbeingSVG />
              <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                PSSM Standard
              </h4>
              <p className="text-gray-600 mb-4">
                Formation de 14h pour apprendre à détecter les troubles
                psychiques et orienter vers l'aide appropriée.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Tous publics Adultes</li>
                <li>• 2 jours de formation</li>
                <li>• Certificat officiel de secouriste</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <TrainingSVG />
              <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                Formation Entreprise
              </h4>
              <p className="text-gray-600 mb-4">
                Sessions sur-mesure selon disponibilités des équipes RH,
                managers et référents bien-être en entreprise.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Format personnalisé au contexte</li>
                <li>• Dans vos locaux</li>
                <li>• Suivi post-formation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Carole PLAS, Votre Formatrice PSSM
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Accréditée par PSSM France, je vous accompagne dans
                l'apprentissage des techniques de premiers secours en santé
                mentale. Basée en région PACA, mon approche privilégie la
                bienveillance et la mise en pratique de cas concrets.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Formatrice Accréditée
                    </h4>
                    <p className="text-gray-600">
                      Habilitation officielle PSSM France
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Publics Ciblés
                    </h4>
                    <p className="text-gray-600">
                      Particuliers, Associations, Entreprises
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8 text-center">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className="mx-auto mb-6"
                  >
                    <circle cx="100" cy="80" r="40" fill="#e0e7ff" />
                    <path
                      d="M100 120 Q70 130 60 160 L140 160 Q130 130 100 120"
                      fill="#6366f1"
                    />
                    <circle cx="85" cy="75" r="3" fill="#374151" />
                    <circle cx="115" cy="75" r="3" fill="#374151" />
                    <path
                      d="M90 85 Q100 95 110 85"
                      stroke="#374151"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Aura de bienveillance */}
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="#f3e8ff"
                      strokeWidth="20"
                      opacity="0.3"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke="#ddd6fe"
                      strokeWidth="15"
                      opacity="0.4"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      fill="none"
                      stroke="#c4b5fd"
                      strokeWidth="10"
                      opacity="0.5"
                    />
                  </svg>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Carole PLAS
                  </h4>
                  <p className="text-purple-600 font-semibold">
                    Formatrice PSSM Accréditée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="temoignages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h3>
            <p className="text-lg text-gray-600">
              Ce que disent les participants de nos formations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sophie M.</h4>
                  <p className="text-gray-600 text-sm">RH - Entreprise</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Formation très enrichissante qui m'a donné les clés pour mieux
                accompagner mes collègues. L'approche bienveillante et les cas
                pratiques m'ont vraiment aidée."
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Jean-Luc R.</h4>
                  <p className="text-gray-600 text-sm">Manager d'équipe</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Je recommande vivement cette formation. Elle m'a permis de
                développer mon écoute et de mieux détecter les signaux d'alerte
                chez mes collaborateurs."
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Anne D.</h4>
                  <p className="text-gray-600 text-sm">Enseignante</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Formation indispensable pour tous ceux qui sont en contact avec
                des jeunes. Les outils pratiques sont directement applicables au
                quotidien."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h3>
            <p className="text-lg text-gray-600">
              Prêt à vous former aux premiers secours en santé mentale ?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-8">
                Prêt à vous former ?
              </h4>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Téléphone</h5>
                    <p className="text-gray-600">06 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Email</h5>
                    <p className="text-gray-600">carole.plas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      Zone d'intervention
                    </h5>
                    <p className="text-gray-600">
                      Région PACA, Occitanie, Rhône-Alpes, Ile-de-France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Formulaire de Contact
              </h4>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    ✓ Votre message a été envoyé avec succès ! Carole vous
                    recontactera rapidement.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    ✗ Une erreur s'est produite. Veuillez réessayer ou nous
                    contacter directement.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Formation
                  </label>
                  <select
                    name="formation"
                    value={formData.formation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="PSSM Standard">PSSM Standard</option>
                    <option value="Formation Entreprise">
                      Formation Entreprise
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className={`w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting || !formData.name || !formData.email
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg"
                  } text-white`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>
                    💡 <strong>Pour utiliser Formspree :</strong>
                  </p>
                  <p>
                    1. Créez un compte sur{" "}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      formspree.io
                    </a>
                  </p>
                  <p>
                    2. Remplacez "YOUR_FORM_ID" par votre ID Formspree dans le
                    code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h5 className="text-xl font-bold">PSSM Formation</h5>
              </div>
              <p className="text-gray-400">
                Carole PLAS - Formatrice accréditée en Premiers Secours en Santé
                Mentale. Ensemble, développons une société plus bienveillante.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Formations</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    PSSM Standard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Formation Entreprise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Informations</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accréditations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Carole PLAS - PSSM Formation. Tous droits réservés. |
              Formatrice accréditée PSSM France
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
