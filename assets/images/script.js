// Ajout d'un script pour gérer le clic sur le bouton de recherche
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const searchButton = document.querySelector('.search__button');
        
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du formulaire
            const searchInput = document.getElementById('search_bar').value;
            alert('Vous avez recherché : ' + searchInput);
        });
    });
</script>