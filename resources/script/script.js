$.fn.shake = function(interval = 100){
   this.addClass('shaking');
   this.css('transition', 'all ' + (interval / 100).toString() + 's');
   setTimeout(() => {
       this.css('transform', 'translateX(-50%)');
   }, interval * 0);
   setTimeout(() => {
       this.css('transform', 'translateX(50%)');
   }, interval * 1);
   setTimeout(() => {
       this.css('transform', 'translateX(-25%)');
   }, interval * 2);
   setTimeout(() => {
       this.css('transform', 'translateX(25%)');
   }, interval * 3);
   setTimeout(() => {
       this.css('transform', 'translateX(-7%)');
   }, interval * 4);
   setTimeout(() => {
       this.css('transform', 'translateX(0%)');
   }, interval * 5);
   this.removeClass('shaking');
};

$(document).ready(function(){
  
  
   function tester() {
     if(alginateError() && rgdError() &&  iniFibError() && finFibError() &&collagenError()) {
       return true
     }
   
     return false
   }
 
      $(".rotate").click(function () {
         $(this).toggleClass("down");
     })
   
 let inputsubstrateman;
 let totalVol;
 let totalVolmL;
 let inpSubNum;
 let inpSubVol;
 
 let inputinialginateconc;
 let inputfinalginateconc;
 let inputalgsodcont;
 let inputalgibiccont;
 let inputinirgdconc;
 let inputinirgdcont;
 let inputfinrgdcont;
 let inputrgdsodcont;
 let inputrgdbiccont;
 
 
 let inputinifibconc;
 let inputfinfibconc;
 let inputfibsodcont;
 let inputfibbiccont;
 let inputinicolconc;
 let inputfincolconc;
 let inputcolacidconc;
 let inputconcbicar;
 let inputfinbicarb;
 
 
 let outputrgdneeded;
 let outputrgdneededmg;
 let outputrgdneededperc;
 let outputalgiconc;
 let outputalgiused;
 let ouputfibriused;
 let outputcolused;
 let outputfinbicarbneeded;
 let ouputcolacid;
 let ouputmatrixbicarb;
 let outputbicarbneeded;
 let outputsodiumadded;
 let outputsodiumneeded;
 let outputsodiumtoadd;
 
 
 let costofalginatemg = $("#costofalginatemg").val();
 let costofrgdalginatemg = $("#costofrgdalginatemg").val();
 let costoffibrinogenmg = $("#costoffibrinogenmg").val();
 let costofcollagenmg = $("#costofcollagenmg").val();
 let costofalginate;
 let costofrgdalginate;
 let costoffribrinogen;
 let costofcollagen;
 
 
let calstdalgmL;
let calrgdalgmL;
let calcolmL;
let calfibmL;
let calbicarmL;
let calwatermL;
let calnaclmL;
 
 let calcstandalg;
 let calcrgdalg;
 let calccollagen;
 let calcfibrinogen;
 let calcwater;
 let calcbicarb;
 let calcnacl;
 
 
 let actustandalg;
 let acturgdalg;
 let actcollagen;
 let actfibrinogen;
 let actwater;
 let actbicarb;
 let actnacl;
 let totalcalvol;
 
 
 let secactustdalg;
 let secacturgdalg;
 let secactucollagen;
 let secactufibrinogen;
 let secactwater;
 let secactbicarb;
 let secactnacl;
 let totalrgdvol;
 
 var audio  = new Audio('https://www.fesliyanstudios.com/soundeffects-download.php?id=390');
 var reseting = new Audio('https://www.fesliyanstudios.com/soundeffects-download.php?id=396')
 

 
 
  $("#nextBtn").click(function(event){
     inpSubNum = $("#inputsubstratenum").val();
     inpSubVol = $("#inputsubstratevol").val();
     inputsubstrateman = $("#inputsubstrateman").val();
     inputinialginateconc = $("#inputinialginateconc").val();
     inputfinalginateconc = $("#inputfinalginateconc").val();
     inputalgsodcont = $("#inputalgsodcont").val();
     inputalgibiccont = $("#inputalgibiccont").val();
     inputinirgdconc = $("#inputinirgdconc").val();
     inputinirgdcont = $("#inputinirgdcont").val();
     inputfinrgdcont = $("#inputfinrgdcont").val();
     inputrgdsodcont = $("#inputrgdsodcont").val();
     inputrgdbiccont = $("#inputrgdbiccont").val();
     inputinifibconc = $("#inputinifibconc").val();
     inputfinfibconc = $("#inputfinfibconc").val();
     inputfibsodcont = $("#inputfibsodcont").val();
     inputfibbiccont = $("#inputfibbiccont").val();
     inputinicolconc = $("#inputinicolconc").val();
     inputfincolconc = $("#inputfincolconc").val();
     inputcolacidconc = $("#inputcolacidconc").val();
     inputconcbicar = $("#inputconcbicar").val();
     inputfinbicarb = $("#inputfinbicarb").val();
 
 
 
 
 
     if (inputsubstrateman == 0) {
         totalVol = (inpSubNum * inpSubVol) * 1000;
         totalVolmL = inpSubNum * inpSubVol;
         totalcalvol = totalVolmL;
      }
      else {
          totalVol = inputsubstrateman * 1000;
          totalVolmL = inputsubstrateman;
          totalVolmL = totalVolmL;
      }
 
      outputrgdneeded = (totalVolmL*inputfinrgdcont)/1000;
      outputrgdneededmg = outputrgdneeded/inputinirgdcont;
      outputrgdneededperc = outputrgdneededmg/10/totalVolmL;
      outputalgiconc = inputfinalginateconc-outputrgdneededperc;
      outputalgiused = totalVolmL*outputalgiconc*10;
      ouputfibriused = inputfinfibconc*totalVolmL;
      outputcolused = totalVolmL*inputfincolconc;
      costofalginate = costofalginatemg*outputalgiused;
      costofrgdalginate = costofrgdalginatemg*outputrgdneededmg;
      costoffribrinogen = costoffibrinogenmg*ouputfibriused;
      costofcollagen = costofcollagenmg*outputcolused;
 
      $('#outputrgdneeded').val(outputrgdneeded);
      $('#outputrgdneededmg').val(outputrgdneededmg);
      $('#outputrgdneededperc').val(outputrgdneededperc);
      $('#outputalgiconc').val(outputalgiconc);
      $('#outputalgiused').val(outputalgiused);
      $('#ouputfibriused').val(ouputfibriused);
      $('#outputcolused').val(outputcolused);
      $('#costofalginate').val('$' + costofalginate.toFixed(2));
      $('#costofrgdalginate').val('$' + costofrgdalginate.toFixed(2));
      $('#costoffribrinogen').val('$' + costoffribrinogen);
      $('#costofcollagen').val('$' + costofcollagen.toFixed(2));
     $('#totalvol').val(totalVol);
 
     //Caluclations
     calcstandalg = outputalgiconc/(inputinialginateconc/totalVolmL);
     calcrgdalg = outputrgdneededperc/(inputinirgdconc/totalVolmL);
     calccollagen = outputcolused/inputinicolconc;
     calcfibrinogen = ouputfibriused/inputinifibconc;
     outputfinbicarbneeded = inputfinbicarb*totalVolmL;
     ouputcolacid = inputcolacidconc*calccollagen;
     ouputmatrixbicarb = (inputalgibiccont*calcstandalg)+(inputrgdbiccont*calcrgdalg)+(inputfibbiccont*calcfibrinogen);
     outputbicarbneeded = (outputfinbicarbneeded+ouputcolacid)-ouputmatrixbicarb;
     calcbicarb = outputbicarbneeded/inputconcbicar;
     outputsodiumadded = (inputalgsodcont*calcstandalg)+(inputalgibiccont*calcstandalg)+(inputrgdsodcont*calcrgdalg)+(inputrgdbiccont*calcrgdalg)+(inputfibsodcont*calcfibrinogen)+(inputfibbiccont*calcfibrinogen)+(inputconcbicar*calcbicarb);
     outputsodiumneeded = 150*totalVolmL;
     outputsodiumtoadd = outputsodiumneeded - outputsodiumadded;
     calcnacl = outputsodiumtoadd/1500;
     calcwater = totalVolmL-(calcstandalg+calcrgdalg+calccollagen+calcfibrinogen+calcbicarb+calcnacl);
     $('#calcstandalg').val((calcstandalg*1000).toFixed(0));
     $('#calcrgdalg').val((calcrgdalg*1000).toFixed(0));
     $('#calccollagen').val((calccollagen*1000).toFixed(0));
     $('#calcfibrinogen').val((calcfibrinogen*1000).toFixed(0));
     $('#calcbicarb').val((calcbicarb*1000).toFixed(1));
     $('#calcnacl').val((calcnacl*1000).toFixed(0));
     $('#calcwater').val((calcwater*1000).toFixed(0));
      $('#outputfinbicarbneeded').val(outputfinbicarbneeded.toFixed(2));
      $('#ouputcolacid').val(ouputcolacid.toFixed(2));
      $('#ouputmatrixbicarb').val(ouputmatrixbicarb.toFixed(2));
      $('#outputbicarbneeded').val(outputbicarbneeded.toFixed(2));
      $('#outputsodiumadded').val(outputsodiumadded.toFixed(2));
      $('#outputsodiumneeded').val(outputsodiumneeded.toFixed(2));
      $('#outputsodiumtoadd').val(outputsodiumtoadd.toFixed(2));
       calstdalgmL = (calcstandalg*1000).toFixed(0);
       calrgdalgmL = (calcrgdalg*1000).toFixed(0);
       calcolmL = (calccollagen*1000).toFixed(0);
       calfibmL = (calcfibrinogen*1000).toFixed(0);
       calbicarmL = (calcbicarb*1000).toFixed(1);
       calwatermL = (calcwater*1000).toFixed(0);
       calnaclmL = (calcnacl*1000).toFixed(0);    
   
      event.preventDefault();
 
   });
   
   function alginateError() {
      let a = Number(inputfinalginateconc);
      let blank = 0;
      blank += (inputfinalginateconc === '') ? 1 : 0;
      blank += (inputfinalginateconc < 0) ? 4 : 0;
      blank += (a >= inputinialginateconc) ? 3 : 0;
      switch (blank) {
         case 1:
            $('.alginateError').show();
            $('.inpfinalg').addClass('errorActive');
            $("#inputfinalginateconc").shake();
            $("#inputfinalginateconc").focus();
             $("#inputinialginateconc").get(0).scrollIntoView();
           return false;
           case 4:
            $('.alginateError').html('You need to enter a number greater than or equal to zero.');
            $('.alginateError').show();
            $('.inpfinalg').addClass('errorActive');
            $("#inputfinalginateconc").shake();
            $("#inputinialginateconc").get(0).scrollIntoView();
            return false;
            case 3:
            $('.alginateError').html(`Final alginate concentration cannot be greater than initial, please enter a value less than ${inputinialginateconc}.`);
            $('.alginateError').show();
            $('.inpfinalg').addClass('errorActive');
            $("#inputfinalginateconc").shake();
            $("#inputinialginateconc").get(0).scrollIntoView();
            return false;
            default:
            $('.inpfinalg').removeClass('errorActive');
            $('.alginateError').hide(); 
            return true
       } 
   }
  
   function rgdError() {
      if (inputfinrgdcont === '') {
         $('.rgdError').show();
         $('.inpfinrgd').addClass('errorActive');
         $("#inputinirgdcont").get(0).scrollIntoView();
         $("#inputfinrgdcont").focus();
         $("#inputfinrgdcont").shake();       
  }
      else if (inputfinrgdcont < 0) {
      $('.rgdError').html('You need to enter a number greater than or equal to zero.');
       $('.rgdError').show();
       $('.inpfinalg').addClass('errorActive');
       $("#inputinirgdcont").get(0).scrollIntoView();
       $("#inputfinrgdcont").shake();       
  }
  else {
     $('.inpfinrgd').removeClass('errorActive');
     $('.rgdError').hide(); 
     return true
  }
   }
  
   function iniFibError() {
      if (inputinifibconc === '') {
         $('.iniFibError').show();
         $('.inpinifib').addClass('errorActive');
         $("#inputrgdbiccont").get(0).scrollIntoView();
         $("#inputinifibconc").focus();
         $("#inputinifibconc").shake();       
  }
 
  else if (inputinifibconc <= 0) {
     $('.iniFibError').html('You need to enter a number greater than zero.');
     $('.iniFibError').show();
     $('.inpinifib').addClass('errorActive');
     $("#inputrgdbiccont").get(0).scrollIntoView();
     $("#inputinifibconc").shake();       
     
  }
  else {
     $('.inpinifib').removeClass('errorActive');
     $('.iniFibError').hide(); 
     return true
  }
   }
  
   function finFibError() {
      let a = Number(inputfinfibconc);
      let blank = 0;
   blank += (inputfinfibconc === '') ? 1 : 0;
   blank += (inputfinfibconc < 0) ? 4 : 0;
   blank += (a > inputinifibconc) ? 3 : 0;
   switch (blank) {
      case 1:
         $('.finFibError').show();
         $('.inpfinfib').addClass('errorActive');
         $("#inputfinfibconc").shake();
         $("#inputfinfibconc").focus();
         $("#inputinifibconc").get(0).scrollIntoView();
        return false;
        case 4:
         $('.finFibError').html('You need to enter a number greater than or equal to zero.');
         $('.finFibError').show();
         $('.inpfinfib').addClass('errorActive');
         $("#inputfinfibconc").shake();
         $("#inputinifibconc").get(0).scrollIntoView();
         return false;
         case 3:
            $('.finFibError').html(`Final Fibrinogen concentration cannot be greater than initial, please enter a value less than ${inputinifibconc}.`);
            $('.finFibError').show();
            $('.inpfinfib').addClass('errorActive');
           $("#inputfinfibconc").shake();
            $("#inputinifibconc").get(0).scrollIntoView();
         return false;
         default:
            $('.inpfinfib').removeClass('errorActive');
            $('.finFibError').hide(); 
            return true
    }
   }
   
   function collagenError() {
   let a = Number(inputfincolconc);
   let blank = 0;
   blank += (inputfincolconc === '') ? 1 : 0;
   blank += (inputfincolconc < 0) ? 4 : 0;
   blank += (a > inputinicolconc) ? 3 : 0;
   switch (blank) {  
      case 1:
         $('.collagenError').show();
         $('.inpfincol').addClass('errorActive');
         $("#inputinicolconc").get(0).scrollIntoView();
         $("#inputfincolconc").shake();
         $("#inputfincolconc").focus();
         return false;
      case 4:
         $('.collagenError').html('You need to enter a number greater than or equal to zero.');
         $('.collagenError').show();
         $('.inpfincol').addClass('errorActive');
         $("#inputinicolconc").get(0).scrollIntoView();
         $("#inputfincolconc").shake();  
         return false;
      case 3:
         $('.collagenError').html(`Final collagen concentration cannot be greater than initial, please enter a value less than ${inputinicolconc}.`);
         $('.collagenError').show();
         $('.inpfincol').addClass('errorActive');
         $("#inputinicolconc").get(0).scrollIntoView();
         $("#inputfincolconc").shake();  
         return false;
      default:
         $('.inpfincol').removeClass('errorActive');
         $('.collagenError').hide(); 
         return true

   }
   }

  
 
 
   $("#actustandalg").keyup(function(){
       let a = Number(this.value);
     acturgdalg = (calcrgdalg*this.value)/calcstandalg;
     actcollagen = (calccollagen*this.value)/calcstandalg;
     actfibrinogen = (calcfibrinogen*this.value)/calcstandalg;
     actwater = (calcwater*this.value)/calcstandalg;
     actbicarb = (calcbicarb*this.value)/calcstandalg;
     actnacl = (calcnacl*this.value)/calcstandalg;
     totalcalvol = acturgdalg+a+actcollagen+actfibrinogen+actwater+actbicarb+actnacl;
 
  
 
 
     $('#acturgdalg').val((acturgdalg).toFixed(0));
     $('#actcollagen').val((actcollagen).toFixed(0));    
     $('#actfibrinogen').val((actfibrinogen).toFixed(0));    
     $('#actwater').val((actwater).toFixed(0));    
     $('#actbicarb').val((actbicarb).toFixed(0));    
     $('#actnacl').val((actnacl).toFixed(0)); 
     $('#totalcalvol').val(Math.floor(totalcalvol));   
 });
 
 
 
 $("#secacturgdalg").keyup(function(){
     let a = Number(this.value);
     secactustdalg = (calcstandalg*this.value)/calcrgdalg;
     secactucollagen = (calccollagen*this.value)/calcrgdalg;
     secactufibrinogen = (calcfibrinogen*this.value)/calcrgdalg;
     secactwater = (calcwater*this.value)/calcrgdalg;
     secactbicarb = (calcbicarb*this.value)/calcrgdalg;
     secactnacl = (calcnacl*this.value)/calcrgdalg;
     totalrgdvol = a+secactustdalg+secactucollagen+secactufibrinogen+secactwater+secactbicarb+secactnacl;
 
     $('#secactustdalg').val((secactustdalg).toFixed(0));
     $('#secactucollagen').val((secactucollagen).toFixed(0));    
     $('#secactufibrinogen').val((secactufibrinogen).toFixed(0));    
     $('#secactwater').val((secactwater).toFixed(0));    
     $('#secactbicarb').val((secactbicarb).toFixed(0));    
     $('#secactnacl').val((secactnacl).toFixed(0)); 
     $('#totalrgdvol').val(Math.floor(totalrgdvol));  
 });
 $("#customSwitch1").on("click", function() {
   let alginateText = $('#stdalglab');
   let rgdText = $('#rgdalglab');
   let collagenText = $('#colllab');
   let fibrinogenText = $('#fibrolab');
   let waterText = $('#waterlab');
   let bicarbText = $('#bicarblab');
   let naclText = $('#nacllab');

   let blah = (alginateText.text() == alginateText.data("text-swap")) ? 0 : 1;

   switch (blah) {
      case 0:
         alginateText.text(alginateText.data("text-original"));
         $('#calcstandalg').val(calstdalgmL);
         rgdText.text(rgdText.data("text-original"));
         $('#calcrgdalg').val(calrgdalgmL);
         collagenText.text(collagenText.data("text-original"));
         $('#calccollagen').val(calcolmL);
         fibrinogenText.text(fibrinogenText.data("text-original"));
         $('#calcfibrinogen').val(calfibmL);
         waterText.text(waterText.data("text-original"));
         $('#calcwater').val(calwatermL);
         bicarbText.text(bicarbText.data("text-original"));
         $('#calcbicarb').val(calbicarmL);
         naclText.text(naclText.data("text-original"));
         $('#calcnacl').val(calnaclmL);
               break;
     default:
      alginateText.data("text-original", alginateText.text());
      alginateText.text(alginateText.data("text-swap"));
      $('#calcstandalg').val(calcstandalg.toFixed(3));
      rgdText.data("text-original", rgdText.text());
      rgdText.text(rgdText.data("text-swap"));
      $('#calcrgdalg').val(calcrgdalg.toFixed(3));
      collagenText.data("text-original", collagenText.text());
      collagenText.text(collagenText.data("text-swap"));
      $('#calccollagen').val(calccollagen.toFixed(3));
      fibrinogenText.data("text-original", fibrinogenText.text());
      fibrinogenText.text(fibrinogenText.data("text-swap"));
      $('#calcfibrinogen').val(calcfibrinogen.toFixed(3));
      waterText.data("text-original", waterText.text());
      waterText.text(waterText.data("text-swap"));
      $('#calcwater').val(calcwater.toFixed(3));
      bicarbText.data("text-original", bicarbText.text());
      bicarbText.text(bicarbText.data("text-swap"));
      $('#calcbicarb').val(calcbicarb.toFixed(3));
      naclText.data("text-original", naclText.text());
      naclText.text(naclText.data("text-swap"));
      $('#calcnacl').val(calcnacl.toFixed(3));
   }
 
 });
 
var current_fs, next_fs, previous_fs;
var animating;
$(".next").click(function () {
  if (!tester()) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  $(".circle").eq($("fieldset").index(next_fs)).addClass("active");
  $('.progress').css('width', '50%');
  next_fs.show();
  audio.load();
  audio.play();
 current_fs.animate({
   opacity: 0,
   marginLeft: "50%",
 }, 250, function () {
   current_fs.hide();
   animating = false;
 } );
 $("#progress").get(0).scrollIntoView();
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $(".circle")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");
    previous_fs.css({
      opacity: 1,
      marginLeft: "auto"
    });
    $('.progress').css('width', '0%');

      previous_fs.show();

  $("#inputdata").get(0).scrollIntoView();
  current_fs.hide();

  animating = false;

});
$(".proceed").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  $(".circle").eq($("fieldset").index(next_fs)).addClass("active");
  next_fs.show();
  current_fs.hide();
  audio.load();
  audio.play();
  $('.progress').css('width', '100%');

  $("#progress").get(0).scrollIntoView();
  animating = false;

});
$(".back").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $(".circle")
  .eq($("fieldset").index(current_fs))
  .removeClass("active");
  previous_fs.show();
  current_fs.hide();
  $("#internalcalc").get(0).scrollIntoView();
  $('.progress').css('width', '50%');
  animating = false;

});
$(".reset").click(function () {
  current_fs = $(this).parent();
  newprevious = $(this).parent().prev();
  previous_fs = $(this).parent().prev().prev();
  previous_fs.show();
  current_fs.hide();
  reseting.load();
  reseting.play();
  $(".circle")
  .eq($("fieldset").index(current_fs))
  .removeClass("active");
  $(".circle")
  .eq($("fieldset").index(newprevious))
  .removeClass("active");
  previous_fs.css({
   opacity: 1,
   marginLeft: "auto"
 });
   $("#inputdata").get(0).scrollIntoView();
  $('.progress').css('width', '0%');

  animating = false;

});
 
 
 
       
 });
    
 
 