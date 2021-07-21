const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


//for (let i = 0; i < inventors.length; i++) {
// if inventors[i].year > 1600 && inventors[i].year < 1700

let born1600s = inventors.filter(function(inventors){
	return inventors.year > 1600 && inventors.year < 1700
})	

console.table(born1600s);

let inventorsAges = inventors.map(function(inventor) {
	return {
		first: inventor.first,
		last: inventor.last,
		age: inventor.passed - inventor.year
	}
})

console.table(inventorsAges)

let sortedByBirth = inventors.sort(function(first, second){
	return  first.year < second.year ? -1: 1
})

console.table(sortedByBirth)

let bornBefore1875 = inventors.filter(function(inventor) {
	return inventor.year < 1875
})

let ages1875 = bornBefore1875.map(function(inventor) {
	return {
		first: inventor.first,
		last: inventor.last,
		age: inventor.passed - inventor.year
	}
})

let ages1875sorted = ages1875 = ages1875.sort(function(first, second) {
	return first.age < second.age ? -1: 1

})

console.table(ages1875sorted)