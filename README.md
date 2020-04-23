# Projet : Algorithmes

## Algorithmes de tri

* Tri Fusion
* Tri Cocktail
<!-- * Tri -->

Le fichier `algo.js` est a exécuter avec un fichier contenant une liste de nombres en paramètres.

* Liste n°1 : `list_1.txt`
* Liste n°2 : `list_2.txt`
* Liste déjà triée : `list_sorted.txt`
* Liste 3 valeurs : `list_short.txt`
* Liste 100 valeurs : `list_long.txt`
* `list.txt` : valeurs au choix (au format suivant `48 -2 6 12 0 -4`)

Pour chaque algorithme s'affiche en console :
* le nom de l'algorithme utilisé
* le nombre de comparaisons effectuées
* le tableau final en sortie de l'algorithme

Commande :
```
node algo.js list_1.txt
```

## Projet : Algorithmie

Le fichier `script.js` est a exécuter avec un fichier contenant une liste de nombres en paramètres.

### Sujet 1

Avec une liste de nombres entiers relatifs et un nombre `k`, la méthode retourne un booléen qui affiche si deux nombres de cette liste ont `k` comme résultat de leur somme.

* Liste n°3 : `list_3.txt`
* Liste n°4 : `list_4.txt`
* `list.txt` : valeurs au choix (au format suivant `48 -2 6 12 0 -4`)

Ex : avec la liste n°3 `[10, 15, 3, 7]` et `k` = `17`, la fonction devra sortir `true` car 10 + 7 = 17.<br>
Ex : avec la liste n°4 `[1, 8, 10, 21]` et `k` = `19`, la fonction devra sortir `false` car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

* Exercice n°1 : Résolution du sujet avec une complexité algorithmique de O(n²)
* Exercice n°3 : Résolution du sujet avec une complexité algorithmique de O(n)
<!-- * Exercice 5 : Résolution du sujet en ne faisant qu'un seul passage sur la liste -->

### Sujet 2

Avec une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue (d'est en ouest), on retourne le nombre de bâtiments ayant au moins un appartement avec une vue sur le soleil couchant (à l'ouest).

* Liste n°5 : `list_5.txt`
* Liste n°6 : `list_6.txt`
* `list.txt` : valeurs au choix (au format suivant `48 -2 6 12 0 -4`)

Ex : avec la liste n°5 `[3, 7, 8, 3, 6, 1]`, la fonction retourner `3` puisque l'étage le plus haut des immeubles ayant comme taille `8`, `6`, et `1` ont tous une vue à l'ouest.<br>
Ex : avec la liste n°6 `[1, 4, 5, 8]`, la fonction retourner `1` puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

<!-- * Exercice n°2 : Résolution du sujet avec une complexité algorithmique de O(n²) -->
<!-- * Exercice n°4 : Résolution du sujet avec une complexité algorithmique de O(n) -->
<!-- * Exercice 6 : Résolution du sujet en ne faisant qu'un seul passage sur la liste -->

Commande :
```
node script.js list_3.txt
```