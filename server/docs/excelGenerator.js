var xl = require('excel4node');
const testData = [{ name: "me", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" }, { name: "chris", color: "red", some: "lol", red: "lol", small: "eeee" },]
const axios = require("axios")
const flatten = require("flat")
// Create a new instance of a Workbook class
function generateExcel(data) {
    var wb = new xl.Workbook();

    // Add Worksheets to the workbook
    var ws = wb.addWorksheet('Sheet 1');
    var ws2 = wb.addWorksheet('Sheet 2');

    // Create a reusable style
    var style = wb.createStyle({
        font: {
            color: '#000103',
            size: 12,
        }
    });

    //make an array of all the titles we want to use to make our heading.
    const keys = Object.keys(testData[0])

    //makes an array of all the values similar to the keys
    let values = []
    testData.forEach((el) => {
        values.push(...Object.values(el))
    })


    let titleCount = 1
    let colCount = 2
    let rowCount = 1
    let arrPosition = keys.length
    /// loops throught and adds each item and increament the spaces 
    for (let j = 0; j < keys.length; j++) {
        ws.cell(1, titleCount).string(keys[j])

        for (let i = 0; i < values.length; i++) {
            if (i % arrPosition === 0) {
                ws.cell(colCount, rowCount).string(values[i]).style(style)
                colCount++
            };

        }
        colCount = 2
        titleCount++
        rowCount++
        values.shift()
    }




    //change this depending on where you want to be built/ where you put the data
    wb.write('./docs/Excel.xlsx');
}
const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: { q: 'taylor swift', pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
    headers: {
        'X-RapidAPI-Key': '29018514f3msh527e9a0f194d3a7p1c46ccjsn4a2648e61b10',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};
axios.request(options).then((data) => {
    let dats = data
    const runFlatten = async () => {
        let result = await flatten(data);
        console.log(result)
        return result
    }
    console.log(runFlatten())
})



module.exports = generateExcel
