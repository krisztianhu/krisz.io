function szamol()
{
    var db=Number(document.getElementById('fo').value);
    var huskg=1.5/8*db;
    var olajkanal=6/8*db;
    document.getElementById('hus').innerHTML=huskg;
    document.getElementById('olaj').innerHTML=olajkanal;
}