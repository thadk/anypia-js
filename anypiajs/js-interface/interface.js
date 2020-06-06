let anypiajs = {}

function SetupInterface() {

    Module.ccall('InitalizeApplication', 'null', [], []);

    anypiajs.GetAge = function() { return Module.cwrap('GetAge', 'string', []) }
    anypiajs.GetCalc = function() {  return Module.cwrap('GetCalc', 'string', []) }
    anypiajs.GetYears = function() { return Module.cwrap('GetYears', 'number', [])}
}
