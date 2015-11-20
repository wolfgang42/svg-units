var conversion_factors = {
	px: 1,
	pt: 1.25,
	pc: 15,
	mm: 3.543307,
	cm: 35.43307,
	in: 90,
}
var to_user_units = {}, from_user_units = {}
Object.keys(conversion_factors).forEach(function(key) {
	to_user_units[key] = function (i) { return i * conversion_factors[key] }
	from_user_units[key] = function (u) { return u / conversion_factors[key] }
})

module.exports = {
	conversion_factors: conversion_factors,
	from_user_units: from_user_units,
	to_user_units: to_user_units,
}
