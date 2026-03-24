export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Nos Services',
      references: 'Références',
      contact: 'Contact',
    },
    hero: {
      titles: [
        'Nettoyage Professionnel',
        'Entreprises & Particuliers',
        'Hygiène Garantie',
      ],
      tagline: 'Le partenaire de confiance pour la propreté de vos espaces à Yaoundé',
      cta1: 'Découvrir nos offres',
      cta2: 'Nous Contacter',
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Qui sommes-nous ?',
      content:
        "AVS – À Votre Service est une entreprise professionnelle de nettoyage basée à Yaoundé, Cameroun. Depuis notre création, nous nous engageons à offrir des prestations d'hygiène de qualité supérieure, assurées par un personnel qualifié, formé et rigoureux. Que vous soyez une entreprise, un particulier, un établissement hospitalier ou industriel, nous proposons des solutions sur mesure adaptées à chaque environnement.",
      stats: {
        clients: 'Clients Satisfaits',
        years: "Années d'Expérience",
        categories: 'Catégories de Services',
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Des solutions professionnelles adaptées à chaque besoin',
      tabs: {
        business: 'Offre Entreprises',
        home: 'Services à Domicile',
        oneTime: 'Services Ponctuels',
        sofa: 'Canapé & Désinfection',
      },

      // ─── OFFRE ENTREPRISES ───────────────────────────────────────────────
      business: {
        intro:
          'Nos offres entreprises couvrent des surfaces de 50 à 100 m², du lundi au vendredi, de 7h30 à 13h30. Matériel et produits d\'entretien inclus.',
        premium: {
          name: 'PREMIUM',
          frequency: 'Tous les jours',
          days: 'Du lundi au vendredi',
          surface: '50 à 100 m²',
          hours: '7h30 – 13h30',
          price: '100.000',
          badge: 'Populaire',
        },
        honorable: {
          name: 'HONORABLE',
          frequency: '03 fois / semaine',
          days: 'Du lundi au vendredi',
          surface: '50 à 100 m²',
          hours: '7h30 – 13h30',
          price: '75.000',
        },
        standard: {
          name: 'STANDARD',
          frequency: '02 fois / semaine',
          days: 'Du lundi au vendredi',
          surface: '50 à 100 m²',
          hours: '7h30 – 13h30',
          price: '50.000',
        },
        basic: {
          name: 'BASIQUE',
          frequency: '01 fois / semaine',
          days: 'Du lundi au vendredi',
          surface: '50 à 100 m²',
          hours: '7h30 – 13h30',
          price: '30.000',
        },
        included: 'Services inclus dans toutes les offres :',
        services: [
          'Entretien et nettoyage des sols : carrelage et moquettes',
          'Nettoyage des vitres et plafonds',
          'Entretien du mobilier',
          'Entretien et désinfection des toilettes',
          'Ramassage des poubelles',
        ],
        materials: '✔ Matériel et produits d\'entretien inclus dans l\'offre',
      },

      // ─── SERVICES À DOMICILE ─────────────────────────────────────────────
      home: {
        intro:
          'Nos formules à domicile s\'adaptent à votre rythme de vie. Horaires : 7h30 – 14h30, du lundi au vendredi.',
        formula1: {
          name: 'Formule 1',
          desc: 'Mise à disposition d\'un agent qualifié (CDD / CDI)',
          price: '30.000',
          note: 'Frais d\'ouverture de dossier',
          hours: 'Selon accord client',
          tasks: [
            'Personnel formé et qualifié mis à la disposition du client',
            'Contrat CDD ou CDI selon les besoins',
          ],
        },
        formula2: {
          name: 'Formule 2',
          frequency: '04 fois / semaine',
          days: 'Lundi au vendredi — 16 jours / mois',
          hours: '7h30 – 14h30',
          price: '60.000',
          note: 'Paiement mensuel',
          tasks: [
            'Nettoyage des sols : carreaux / moquettes',
            'Nettoyage des vitres et plafonds',
            'Entretien et désinfection du domicile',
            'Entretien du mobilier',
            'Nettoyage cuisine + vaisselle',
            'Nettoyage et rangement des chambres selon le client',
            'Lessive et repassage',
            'Courses éventuellement',
            'Nettoyage et désinfection des toilettes',
            'Ramassage poubelles',
          ],
        },
        formula3: {
          name: 'Formule 3',
          frequency: '03 fois / semaine',
          days: 'Lundi au vendredi — 12 jours / mois',
          hours: '7h30 – 14h30',
          price: '50.000',
          note: 'Paiement mensuel',
          tasks: [
            'Entretien et désinfection du domicile',
            'Nettoyage des sols : carreaux / moquettes',
            'Nettoyage vitres et plafonds',
            'Entretien + désinfection des toilettes',
            'Nettoyage cuisine + vaisselle',
            'Nettoyage + rangement des chambres selon le client',
            'Courses éventuellement',
            'Ramassage poubelles',
          ],
        },
        formula4: {
          name: 'Formule 4',
          frequency: '02 fois / semaine',
          days: 'Lundi au vendredi — 08 jours / mois',
          hours: '7h30 – 14h30',
          price: '40.000',
          note: 'Paiement mensuel',
          tasks: [
            'Entretien et désinfection du domicile',
            'Nettoyage des sols : carreaux / moquettes',
            'Nettoyage vitres et plafonds',
            'Entretien + désinfection des toilettes',
            'Nettoyage cuisine + vaisselle',
            'Ramassage poubelles',
          ],
        },
      },

      // ─── SERVICES PONCTUELS ──────────────────────────────────────────────
      oneTime: {
        note: 'N.B : Pour tous les services, le devis se fait après visite du site à nettoyer.',
        particuliers: 'Pour les particuliers',
        professionnels: 'Pour les professionnels',
        cleaning: {
          title: 'Nettoyage des logements',
          items: [
            'Lavage et décapage de sols et revêtements',
            'Shampoing fauteuils, tapis, chaises',
            'Vidange des fosses septiques',
            'Nettoyage après chantier',
          ],
        },
        treatment: {
          title: 'Traitements phytosanitaires',
          items: [
            'Dératisation',
            'Désinfection',
            'Désintoxication',
            'Etc.',
          ],
        },
        outdoor: {
          title: 'Espaces verts & assainissement',
          items: [
            'Coupage d\'herbes',
            'Création et entretien de jardins',
            'Vidange des déchets (poubelles, etc.)',
            'Etc.',
          ],
        },
        industrial: {
          title: 'Nettoyage industriel et mécanisé',
          items: [
            'Entretien des bureaux et locaux',
            'Lavage et décapage des sols et revêtements',
            'Shampoing moquette, tapis, chaises, fauteuil',
            'Nettoyage de vitres',
            'Entretien sanitaire',
          ],
        },
        hospital: {
          title: 'Milieu hospitalier',
          items: [
            'Nettoyage et dépoussiérage des surfaces',
            'Nettoyage des sols et vitres',
            'Entretien sanitaire',
            'Aération des pièces',
            'Etc.',
          ],
        },
      },

      // ─── CANAPÉ & DÉSINFECTION ───────────────────────────────────────────
      sofa: {
        sofaTitle: 'Nettoyage Canapé Cuir ou Tissu',
        sofaNote: 'À partir de 07 places : sur devis',
        sofaItems: [
          { label: '01 Place', price: '15.000 FCFA' },
          { label: '02 Places', price: '20.000 FCFA' },
          { label: '03 Places', price: '25.000 FCFA' },
          { label: '04 – 05 Places', price: '45.000 FCFA' },
          { label: 'Salon complet', price: '60.000 FCFA' },
        ],
        extrasTitle: 'Autres prestations',
        extras: [
          { label: 'Moquettes', price: 'À partir de 15.000 FCFA (selon dimension)' },
          { label: 'Voiture (Intérieur)', price: 'À partir de 15.000 FCFA' },
        ],
        disinfTitle: 'Désinfection – Désinsectisation & Dératisation',
        disinfItems: [
          { label: 'Chambre', price: '10.000 FCFA' },
          { label: 'Douche', price: '5.000 FCFA' },
          { label: 'Magasin', price: '5.000 FCFA' },
          { label: 'Salon', price: '15.000 FCFA' },
          { label: 'Cuisine', price: '15.000 FCFA' },
        ],
      },
    },

    // ─── RÉFÉRENCES ──────────────────────────────────────────────────────────
    references: {
      title: 'Nos Références',
      subtitle: 'Ils nous font confiance',
      testimonials: [
        {
          name: 'Marie-Claire D.',
          role: 'Directrice d\'entreprise',
          text: 'Service impeccable depuis 3 ans. AVS a transformé l\'entretien de nos bureaux. Équipe professionnelle et ponctuelle.',
          rating: 5,
        },
        {
          name: 'Jean-Paul M.',
          role: 'Propriétaire d\'hôtel',
          text: 'Une équipe formidable qui comprend nos exigences. La qualité est toujours au rendez-vous.',
          rating: 5,
        },
        {
          name: 'Sandrine T.',
          role: 'Particulier',
          text: 'Très satisfaite du service à domicile. Mon appartement n\'a jamais été aussi propre. Je recommande vivement !',
          rating: 4,
        },
      ],
      clients: [
        'Banques',
        'Hôpitaux',
        'Bureaux',
        'Hôtels',
        'Écoles',
        'Industries',
      ],
    },

    // ─── CONTACT ─────────────────────────────────────────────────────────────
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Parlons de vos besoins en nettoyage',
      sucess_toast: 'Merci pour votre message ! Nous vous contacterons bientôt.',
      error_toast: 'Erreur de connexion. Vérifiez votre réseau.',
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        phone: 'Numéro de téléphone',
        service: 'Type de service souhaité',
        message: 'Votre message',
        submit: 'Envoyer la demande',
        serviceOptions: [
          'Sélectionnez un service',
          'Offre Entreprises',
          'Service à Domicile',
          'Nettoyage Canapé / Moquette',
          'Désinfection / Dératisation',
          'Service Ponctuel',
          'Autre demande',
        ],
      },
      info: {
        address: 'Yaoundé, Mobil Essos, Cameroun',
        phones: [
          '+237 653 50 90 41',
          '+237 657 02 98 54',
        ],
        email: '237avotreservice@gmail.com',
        whatsapp: 'Écrire sur WhatsApp',
      },
    },

    // ─── FOOTER ──────────────────────────────────────────────────────────────
    footer: {
      tagline: 'Votre partenaire de confiance pour la propreté et l\'hygiène de vos espaces.',
      quickLinks: 'Liens rapides',
      copyright: '© 2026 AVS — À Votre Service. Tous droits réservés.',
    },

    whatsapp: {
      message: 'Bonjour AVS, je souhaite obtenir des informations sur vos services de nettoyage.',
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  ENGLISH
  // ══════════════════════════════════════════════════════════════════════════
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Our Services',
      references: 'References',
      contact: 'Contact',
    },
    hero: {
      titles: [
        'Professional Cleaning',
        'Businesses & Households',
        'Guaranteed Hygiene',
      ],
      tagline: 'Your trusted partner for clean and healthy spaces in Yaoundé',
      cta1: 'Explore Our Plans',
      cta2: 'Contact Us',
    },
    about: {
      title: 'About Us',
      subtitle: 'Who we are',
      content:
        'AVS – À Votre Service is a professional cleaning company based in Yaoundé, Cameroon. Since our founding, we have been committed to delivering superior hygiene services through trained, qualified, and dedicated staff. Whether you are a business, a household, a hospital, or an industrial facility, we offer tailored solutions designed for every environment.',
      stats: {
        clients: 'Satisfied Clients',
        years: 'Years of Experience',
        categories: 'Service Categories',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional solutions tailored to every need',
      tabs: {
        business: 'Business Plans',
        home: 'Home Services',
        oneTime: 'One-Time Services',
        sofa: 'Sofa & Disinfection',
      },

      // ─── BUSINESS PLANS ──────────────────────────────────────────────────
      business: {
        intro:
          'Our business plans cover areas of 50 to 100 m², Monday to Friday, from 7:30 AM to 1:30 PM. Equipment and cleaning products included.',
        premium: {
          name: 'PREMIUM',
          frequency: 'Every day',
          days: 'Monday to Friday',
          surface: '50 to 100 m²',
          hours: '7:30 AM – 1:30 PM',
          price: '100,000',
          badge: 'Popular',
        },
        honorable: {
          name: 'HONORABLE',
          frequency: '3 times / week',
          days: 'Monday to Friday',
          surface: '50 to 100 m²',
          hours: '7:30 AM – 1:30 PM',
          price: '75,000',
        },
        standard: {
          name: 'STANDARD',
          frequency: '2 times / week',
          days: 'Monday to Friday',
          surface: '50 to 100 m²',
          hours: '7:30 AM – 1:30 PM',
          price: '50,000',
        },
        basic: {
          name: 'BASIC',
          frequency: '1 time / week',
          days: 'Monday to Friday',
          surface: '50 to 100 m²',
          hours: '7:30 AM – 1:30 PM',
          price: '30,000',
        },
        included: 'Services included in all plans:',
        services: [
          'Floor maintenance and cleaning (tiles and carpets)',
          'Window and ceiling cleaning',
          'Furniture maintenance',
          'Toilet maintenance and disinfection',
          'Waste collection',
        ],
        materials: '✔ Equipment and cleaning products included',
      },

      // ─── HOME SERVICES ───────────────────────────────────────────────────
      home: {
        intro:
          'Our home formulas adapt to your lifestyle. Hours: 7:30 AM – 2:30 PM, Monday to Friday.',
        formula1: {
          name: 'Formula 1',
          desc: 'Dedicated qualified agent (Fixed-term / Permanent contract)',
          price: '30,000',
          note: 'File opening fee',
          hours: 'As agreed with client',
          tasks: [
            'Trained and qualified staff placed at client\'s disposal',
            'Fixed-term (CDD) or permanent (CDI) contract as needed',
          ],
        },
        formula2: {
          name: 'Formula 2',
          frequency: '4 times / week',
          days: 'Monday to Friday — 16 days / month',
          hours: '7:30 AM – 2:30 PM',
          price: '60,000',
          note: 'Monthly payment',
          tasks: [
            'Floor cleaning: tiles / carpets',
            'Window and ceiling cleaning',
            'Home sanitation and disinfection',
            'Furniture maintenance',
            'Kitchen cleaning + dishes',
            'Bedroom cleaning and tidying as per client',
            'Laundry and ironing',
            'Errands occasionally',
            'Toilet cleaning and disinfection',
            'Waste collection',
          ],
        },
        formula3: {
          name: 'Formula 3',
          frequency: '3 times / week',
          days: 'Monday to Friday — 12 days / month',
          hours: '7:30 AM – 2:30 PM',
          price: '50,000',
          note: 'Monthly payment',
          tasks: [
            'Home sanitation and disinfection',
            'Floor cleaning: tiles / carpets',
            'Window and ceiling cleaning',
            'Toilet maintenance and disinfection',
            'Kitchen cleaning + dishes',
            'Bedroom cleaning and tidying as per client',
            'Errands occasionally',
            'Waste collection',
          ],
        },
        formula4: {
          name: 'Formula 4',
          frequency: '2 times / week',
          days: 'Monday to Friday — 8 days / month',
          hours: '7:30 AM – 2:30 PM',
          price: '40,000',
          note: 'Monthly payment',
          tasks: [
            'Home sanitation and disinfection',
            'Floor cleaning: tiles / carpets',
            'Window and ceiling cleaning',
            'Toilet maintenance and disinfection',
            'Kitchen cleaning + dishes',
            'Waste collection',
          ],
        },
      },

      // ─── ONE-TIME SERVICES ───────────────────────────────────────────────
      oneTime: {
        note: 'N.B: For all services, a quote is provided after an on-site visit.',
        particuliers: 'For individuals',
        professionnels: 'For professionals',
        cleaning: {
          title: 'Home Cleaning',
          items: [
            'Floor washing and stripping',
            'Armchair, carpet and chair shampooing',
            'Septic tank emptying',
            'Post-construction cleaning',
          ],
        },
        treatment: {
          title: 'Pest & Sanitary Treatments',
          items: [
            'Rat extermination',
            'Disinfection',
            'Detoxification',
            'Etc.',
          ],
        },
        outdoor: {
          title: 'Green spaces & sanitation',
          items: [
            'Grass cutting',
            'Garden creation and maintenance',
            'Waste and garbage removal',
            'Etc.',
          ],
        },
        industrial: {
          title: 'Industrial & Mechanized Cleaning',
          items: [
            'Office and premises maintenance',
            'Floor and surface washing and stripping',
            'Carpet, rug, chair and armchair shampooing',
            'Window cleaning',
            'Sanitary maintenance',
          ],
        },
        hospital: {
          title: 'Hospital Environments',
          items: [
            'Surface dusting and cleaning',
            'Floor and window cleaning',
            'Sanitary maintenance',
            'Room ventilation',
            'Etc.',
          ],
        },
      },

      // ─── SOFA & DISINFECTION ─────────────────────────────────────────────
      sofa: {
        sofaTitle: 'Leather or Fabric Sofa Cleaning',
        sofaNote: 'From 7 seats: quote on request',
        sofaItems: [
          { label: '01 Seat', price: '15,000 FCFA' },
          { label: '02 Seats', price: '20,000 FCFA' },
          { label: '03 Seats', price: '25,000 FCFA' },
          { label: '04 – 05 Seats', price: '45,000 FCFA' },
          { label: 'Full living room', price: '60,000 FCFA' },
        ],
        extrasTitle: 'Additional services',
        extras: [
          { label: 'Carpets', price: 'From 15,000 FCFA (depending on size)' },
          { label: 'Car interior', price: 'From 15,000 FCFA' },
        ],
        disinfTitle: 'Disinfection – Pest Control & Extermination',
        disinfItems: [
          { label: 'Bedroom', price: '10,000 FCFA' },
          { label: 'Bathroom', price: '5,000 FCFA' },
          { label: 'Store / Shop', price: '5,000 FCFA' },
          { label: 'Living room', price: '15,000 FCFA' },
          { label: 'Kitchen', price: '15,000 FCFA' },
        ],
      },
    },

    // ─── REFERENCES ──────────────────────────────────────────────────────────
    references: {
      title: 'Our References',
      subtitle: 'They trust us',
      testimonials: [
        {
          name: 'Marie-Claire D.',
          role: 'Business Director',
          text: 'Impeccable service for 3 years. AVS has transformed our office maintenance. Professional and punctual team.',
          rating: 5,
        },
        {
          name: 'Jean-Paul M.',
          role: 'Hotel Owner',
          text: 'A wonderful team that understands our requirements. Quality is always delivered.',
          rating: 5,
        },
        {
          name: 'Sandrine T.',
          role: 'Private Client',
          text: 'Very satisfied with the home service. My apartment has never been this clean. Highly recommend!',
          rating: 5,
        },
      ],
      clients: ['Banks', 'Hospitals', 'Offices', 'Hotels', 'Schools', 'Industries'],
    },

    // ─── CONTACT ─────────────────────────────────────────────────────────────
    contact: {
      title: 'Contact Us',
      subtitle: "Let's talk about your cleaning needs",
      sucess_toast: 'Thank you for your message! We will contact you soon.',
      error_toast: 'Connection error. Please check your network.',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone number',
        service: 'Service type',
        message: 'Your message',
        submit: 'Send request',
        serviceOptions: [
          'Select a service',
          'Business Plan',
          'Home Service',
          'Sofa / Carpet Cleaning',
          'Disinfection / Pest Control',
          'One-Time Service',
          'Other request',
        ],
      },
      info: {
        address: 'Yaoundé, Mobil Essos, Cameroon',
        phones: [
          '+237 653 50 90 41',
          '+237 657 02 98 54',
        ],
        email: '237avotreservice@gmail.com',
        whatsapp: 'Chat on WhatsApp',
      },
    },

    // ─── FOOTER ──────────────────────────────────────────────────────────────
    footer: {
      tagline: 'Your trusted partner for cleanliness and hygiene in every space.',
      quickLinks: 'Quick links',
      copyright: '© 2026 AVS — À Votre Service. All rights reserved.',
    },

    whatsapp: {
      message: 'Hello AVS, I would like to get information about your cleaning services.',
    },
  },
};

export type Language = 'fr' | 'en';
export type Translations = typeof translations.fr;