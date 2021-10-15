

const palindromo = require('./ejercicio2')



test("Comprobar si la función palindromo esta definidad", () => {
    expect(palindromo).toBeDefined();
})


test("Es un palindromo", () => {
    expect(palindromo("oso")).toEqual(true)
})

test("No es un palindromo", () => {
    expect(palindromo("campio")).toBe(false);
})