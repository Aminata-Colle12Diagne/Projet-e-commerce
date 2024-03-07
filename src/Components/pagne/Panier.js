import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import db from '../../firebaseConfig';
import mdeuxieme from "../assets/img/deuxieme.webp"

function Panier() {
  const [panierProduits, setPanierProduits] = useState([]);
  const dbFirestore = getFirestore();

  useEffect(() => {
    const fetchPanierProduits = async () => {
      try {
        const panierRef = collection(dbFirestore, 'Panier');
        const panierSnapshot = await getDocs(panierRef);
        const produits = [];

        panierSnapshot.forEach((doc) => {
          produits.push({ id: doc.id, ...doc.data() });
        });

        console.log('Produits dans le panier :', produits);
        setPanierProduits(produits);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits du panier :', error);
      }
    };

    fetchPanierProduits();
  }, [dbFirestore]);

  const ajouterAuPanier = async () => {
    try {
      const panierRef = collection(dbFirestore, 'Panier');
      await panierRef.add({
        imageUrl: mdeuxieme,
        titre: 'Déodorant Solide Certifié Bio efficace 48h Fleur de Coton',
        description: '48h chrono',
        prix: 32.90,
        avis: 329,
        note: 5,
        // ... autres propriétés
      });
      console.log('Produit ajouté au panier avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier :', error);
    }
  };

  return (
    <div className='container' style={{ marginTop: '10rem' }}>
      <h2>Panier</h2>
      <div className='row'>
        {panierProduits.map((produit, index) => (
          <div key={index} className='col-md-3' style={{ position: 'relative' }}>
            <div className='card custom-card' style={{ height: '100%' }}>
              <img src={produit.imageUrl} className='card-img-top' alt={produit.titre} style={{ objectFit: 'cover', height: '50%' }} />
              <div className='card-body'>
                <p className='card-title'>{produit.titre}</p>
                <p className='card-text'>{produit.description}</p>
                <div className='best d-flex'>
                  <p className='card-text monet'>{produit.prix} €</p>
                  <p className='card-text avis'>{produit.avis}</p>
                  <p className='card-text'>
                    {Array.from({ length: produit.note }).map((_, index) => (
                      <i key={index} className='fa-solid fa-star' style={{ fontSize: '13px' }}></i>
                    ))}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn text-white bouton"
                  style={{ width: "14rem", height: "2.5rem", background: "#007266" , marginLeft: "-1.5rem"}}
                  onClick={ajouterAuPanier}
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panier;
