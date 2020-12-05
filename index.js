const response = '[\
	{\
		"id": "0001",\
		"type": "donut",\
		"name": "Cake",\
		"ppu":0.78,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" },\
						{ "id": "1002", "type": "Chocolate" },\
						{ "id": "1003", "type": "Blueberry" },\
						{ "id": "1004", "type": "Devil\'s Food" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5005", "type": "Sugar" },\
				{ "id": "5007", "type": "Powdered Sugar" },\
				{ "id": "5006", "type": "Chocolate with Sprinkles" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	},\
	{\
		"id": "0002",\
		"type": "donut",\
		"name": "Raised",\
		"ppu": 0.55,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5005", "type": "Sugar" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	},\
	{\
		"id": "0003",\
		"type": "donut",\
		"name": "Old Fashioned",\
		"ppu":0.26,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" },\
						{ "id": "1002", "type": "Chocolate" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	}\
]';


const resp = JSON.parse(response);

var sum = 0;
console.log("All topping types: => ");
for (var index = 0; index < resp.length; index++) {
	var donat = resp[index];
	sum += donat.ppu;
	var toppings =  donat.topping;
	for (var i = 0; i < toppings.length; i++) {
		console.log("						"+toppings[i].type)
	}
}
console.log("#################################");

console.log("All batter types: =>");
for (var index = 0; index < resp.length; index++) {
	var donat = resp[index];
	var batter =  donat.batters.batter;
	for (var i = 0; i < batter.length; i++) {
console.log("						"+batter[i].type)
	}
}
console.log("#################################");
console.log("average is "+sum / resp.length);
console.log("#################################");
console.log("sum is "+sum);
console.log("#################################");



console.log("ID'S: =>");
for (var index = 0; index < resp.length; index++) {
	var donat = resp[index];
	console.log("----------------------");
	console.log("		"+donat.id);
	var batter =  donat.batters.batter;
	console.log("batter ids: =>");
	for (var i = 0; i < batter.length; i++) {
		console.log("			"+batter[i].id)
	}
	console.log("topping ids: =>");

	var toppings =  donat.topping;
	for (var i = 0; i < toppings.length; i++) {
		console.log("			"+toppings[i].id)
	}
}


