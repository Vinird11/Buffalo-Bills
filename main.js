var motivos = [
    " o time tem um dos melhores arremesadores da NFL",
    "Gostam de Jogar",
    " touch down!",
    " são amigos fora de campo",
      "eles trabalham bem em equipe"
  ];
  
  var imagens = [ "https://images.daznservices.com/di/library/DAZN_News/4f/7b/allen-knox-10092020-getty-ftr_pjy0e24e82lq15rlljj3qfkkz.jpg?t=327674773",
    "https://s2-ge.glbimg.com/_8SiQP1Elu0fgbOZW2psy239YN0=/0x0:5479x3653/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/w/h/7SwUbbR5uB2RkmBttkTQ/gettyimages-1935662335.jpg",
    "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/01/063-1453890379-1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIg_bzjc6Y2h9IqapgmXugjCwCTewvH5yVy-_1uYR3Iobfn59L6s3NpDeXa81OLVrBOw&usqp=CAU",         "https://esportenewsmundo.com.br/wp-content/uploads/2024/01/GDSwmxrXgAAJ3QK-1000x600.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }