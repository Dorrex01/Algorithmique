var tab1 = [1, 2, -2, 6, 5, 3, 4, 5, 6, 7];
var tab2 = [];
somme1 = 0;
somme2 = 0;
deb = 0;
for (i = 0; i < tab1.length; i++) {
  if (tab1[i] < tab1[i + 1]) {
    somme1 = somme1 + 1;
  } else {
    if (somme1 >= somme2) {
      deb = i - somme1;
      end = i + 1;
      somme1 = 0;
    }
  }
}
k = 0;
for (j = deb; j < end; j++) {
  tab2[k] = tab1[j];
  k++;
}
console.log(tab2);
