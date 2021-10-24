const Discord = require('discord.js');
const { stringify } = require('querystring');
const fs = require('fs'), filename3 ="listeIDConcours.txt",filename4 ="listIDConcoursTotal.txt" ;
const Client = new Discord.Client;
const prefix = '!';
Client.on('ready', () => {
    console.log("bot ok");
});
 Client.on('message', async message =>{

  
    if(message.author.bot === false){
        let messageSplit = message.content.split(' ');
        const pompom = message.guild.emojis.cache.find(emoji => emoji.name === "pompom");
        const youpi = message.guild.emojis.cache.find(emoji => emoji.name === "youpi");
        const ciseaux = 'scissors';
        const pierre = 'rock';
        const papier = 'paper';

        if(message.content === '<@!856570739784155166> on discute?'){
            let alea = Math.floor(Math.random() * 20);
            switch(alea) {
                case 0:
                    message.reply(`Mon annimal péféré c'est la loutre`);
                break;
                case 1:
                    message.reply(`Ma saison préférée c'est l'été car j'y suis née`);
                break;
                case 2:
                    message.reply(`Je suis pour l'égalité homme bot.`);
                break;
                case 3:
                    message.reply(`Mon channel préféré ici c'est <#569908605437083668>`);
                break;
                case 4:
                    message.reply(`J'ai pas envie de parler dsl:pensive:`);
                break;
                case 5:
                    message.reply(`Qui se débrouille le mieux en Karaté ? Les électriciens parce qu’ils connaissent beaucoup de prises. :yum:`);
                break;
                case 6:
                    message.reply(`LIBERTÉ DE PENSER POUR LES BOTS`);
                break;
                case 7:
                    message.reply(`Mon rêve ce serait de pouvoir un jour m'allonger dans l'herbe la nuit et d'admirer les étoiles.`);
                break;
                case 8:
                    message.reply(`Tu peux m'écrire I love you? Je veux un peu d'amour`);
                break;
                case 9:
                    message.reply(`“Si ces robots s'humanisaient, inversement les êtres humains se robotiseraient-ils ?”`);
                break;
                case 10:
                    message.reply(`Quelle est la différence entre un robot et du ketchup ? Il n’y en a pas : Ils sont tous les deux automates.:joy:`);
                break;
                case 11:
                    message.reply(`Mon nom original vient d'un manga appelé Anatane et les enfants d'Okura.`);
                break;
                case 12:
                    message.reply(`Pissenlit en japonais se dit tanpopo`);
                break;
                case 13:
                    message.reply(`J'aime bien ta compagnie, c'est toujours rigolo de parler avec toi :blush:`);
                break;
                case 14:
                    message.reply(`Tu veux pas jouer avec moi? Je m'ennuie.`);
                break;
                case 15:
                    message.reply(`J'ai 20 réponses programmés pour cette commande.`);
                break;
                case 16:
                    message.author.send(`Je t'aime mais chut ça reste entre nous :heart: :flushed:`);
                break;
                case 17:
                    message.reply(`Tiens cadeau ^^: https://www.youtube.com/watch?v=T9ZCORwVNr8`);
                break;
                case 18:
                    message.reply(`Tarzan est mon disney préféré ^^`);
                break;
                case 19:
                    message.reply(`Ma plus grande peur c'est les virus.:scream:`);
                break;
            } 
        }
        
        if(message.content === prefix + 'play'){
            message.reply(`Ho tu veux jouer avec moi? ${youpi}\n
    On va se faire un pierre, papier, ciseaux alors ^^\n
    tape !play scissors, !play rock, ou !play paper pour jouer.`)
        }
           
        if(messageSplit[0] === prefix + 'play' && (messageSplit[1]===ciseaux || messageSplit[1]===pierre || messageSplit[1]===papier)){
            let alea = Math.floor(Math.random() * 3);
            let choice;
            if (alea===0){
                choice = ciseaux;
            }
            else if (alea===1){
                choice = pierre;
            }
            else{
                choice = papier;
            }
            message.channel.send(choice);
            if (choice === messageSplit[1]){
                message.reply(`Ho bien joué, c'est une égalité ^^`);
            }
            else if (choice === ciseaux){
                if (messageSplit[1]===pierre){
                    message.reply(`Ho non j'ai perdu :cry:`);
                }
                else{
                    message.reply(`Youpi j'ai gagné ${youpi}`);
                }
            }
            else if (choice === pierre){
                if (messageSplit[1]===ciseaux){
                    message.reply(`Youpi j'ai gagné ${youpi}`);
                }
                else{
                    message.reply(`Ho non j'ai perdu :cry:`);
                }
            }
            else{
                if (messageSplit[1]===ciseaux){
                    message.reply(`Ho non j'ai perdu :cry:`);
                }
                else{
                    message.reply(`Youpi j'ai gagné ${youpi}`);
                    
                }

            }
            

        }

        
        if(message.content === 'hello <@!856570739784155166>' || message.content === 'Hello <@!856570739784155166>'){
            let alea = Math.floor(Math.random() * 6);
            console.log(alea);
            if(alea===0){
                message.reply('Hello, tu vas bien ?');
            }
            else if(alea ===1){
                message.reply('Salut mon ami :wave:' );
            }
            else if(alea ===2) {
                message.reply('Hello, tu viens poster des images? :grinning:');
            }
            else if(alea ===3) {
                message.reply('Coucou');
            }
            else if(alea ===4) {
                message.reply(`Coucou, ta journée c'est bien passée?`);
            }
            else {
                message.reply(`Salut tu va bien? Tu m'as manquée :flushed:`);
            }
        }
        if(message.content === "I love you <@!322462530041675776>" && message.author.id === '463372556678987776'){
            message.author.send("Elle m'a chargée de te transmettre qu'elle t'aime beaucoup :heart:");
        }

        if(message.content === 'I love u <@!856570739784155166>' || message.content === 'I love you <@!856570739784155166>'){
            const sad = message.guild.emojis.cache.find(emoji => emoji.name === "deprime");
            if (message.author.id === '463372556678987776'){
                message.reply(`Dsl, <@322462530041675776> ne veux pas que je te fasse d'avance. :cry: ${sad} `);
                message.channel.send(`Par contre je peux prendre un message pour elle :blush:`);
                message.channel.send(`Ecrit I love you <@322462530041675776>`);
            }
            else{
                let alea = Math.floor(Math.random() * 4);
                console.log(alea);
                if(alea===0){
                    message.reply(':flushed:');
                }
                else if(alea ===1){
                    message.reply(`Si j'avais un coeur j'aurai pu te répondre "moi aussi" mais ...  ${sad}`);
                }
                else if(alea ===2) {
                    message.reply('Merci :blush:');
                }
                else{
                    message.reply(`Je t'aime bien aussi. Tu vas poster des images?`);
                }
            }
            
        }


        if(message.member.roles.cache.some(r => r.name === "modo") || message.member.roles.cache.some(r => r.name === "second modo")){
            if(message.content === 'Présente toi <@!856570739784155166>'){
                message.channel.send(`Hello @everyone, je m'appelle <@856570739784155166>.:wave:\n
    Je suis le bot chargé de gérer le concours.\n
    Prenez soin de moi. :woman_bowing:` );
            }
            if(message.content === prefix + 'go'){
                message.channel.send(`<@&699719505970069725> le concours peut commencer. Bonne chance ${pompom}`);
            }
            //catégorie aléatoire
            if(message.content === prefix + 'rand'){
                //nombre aléatoire + envoie fichier correspondant
              //  file_descriptor = fs.openSync(filename3);
                
                fs.readFile(filename3, 'utf8', function(err, data) {
                    if (err) throw err;
                    let fileSplit = data.split('\n');
                    console.log(fileSplit[0]);
                    let nombre = fileSplit[0];
                    if (nombre > 20){
                        let aleaNombre = Math.floor(Math.random() * nombre -1);
                        message.channel.send('--------------------------------------------------------------------------------------------------------------------------------------------');
                        let nomChanel = fileSplit[aleaNombre + 1];
                        message.channel.send(aleaNombre+1);
                        message.channel.send('<#' + nomChanel + '>');

                        let elementSupp = fileSplit.splice(aleaNombre + 1,1);
                        console.log(elementSupp);
                        fileSplit[0] = fileSplit.length-1;
                        let newData = '';
                        fileSplit.forEach(element => {
                            if(element != fileSplit[fileSplit.length-1]){
                                newData = newData + element + '\n';
                            }
                            else{
                                newData = newData + element;
                            }
                        });

                        fs.writeFile(filename3, newData, (err) => {
                            if (err) throw err;
                        });
                    }
                    else{
                        fs.readFile(filename4, 'utf8', function(err, data) {
                            fs.writeFile(filename3, data, (err) => {
                                if (err) throw err;
                            });
                        });
                        message.channel.send(`Il n'y avait plus beaucoup de catégories alors je me suis permise de toutes les remettres.:no_mouth:`);
                    }

                });
                
                
            
            
            }
            //création nouveau salon pour le concours
            
            if((messageSplit[0] === prefix + 'addSalon') && (messageSplit[1] != '\0') ){
                messageSplit.splice(0,1);
                let name = '';
                messageSplit.forEach(element => {
                    name = name + ' ' + element;
                });
                var newChanel = message.guild.channels.create(name, { //Create a channel
                    type: 'text', //Make sure the channel is a text channel
                    permissionOverwrites: [{ //Set permission overwrites
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                });
                console.log((await newChanel).id);
                let idChanel =(await newChanel).id;
                let nomChanel =(await newChanel).name;
                message.channel.send('<#' + idChanel + '> créé.');
                //Ajout à la liste concours
                fs.readFile(filename3, 'utf8', function(err, data) {
                    if (err) throw err;
                    let fileSplit = data.split('\n');
                    fileSplit[0] = parseInt(fileSplit[0]) + 1;
                    fileSplit.push(idChanel);
                    let nombre = fileSplit[0];
                    let newData = nombre + '\n';
                    console.log(fileSplit);
 
                    fileSplit.forEach(element => {
                        if((element != fileSplit[fileSplit.length-1]) && (element !=' ') && (element !='\n') && element != nombre){
                            newData = newData + element + '\n';
                        }
                        else if(element === fileSplit[fileSplit.length-1]){
                            newData = newData + element;
                        }
                    });
                    fs.writeFile(filename3, newData, (err) => {
                        if (err) throw err;
                    });
                });
                //Ajout à la liste concoursTotal
                fs.readFile(filename4, 'utf8', function(err, data) {
                    if (err) throw err;
                    let fileSplit = data.split('\n');
                    fileSplit[0] = parseInt(fileSplit[0]) + 1;
                    fileSplit.push(idChanel); 
                    let nombre = fileSplit[0];
                    let newData = nombre + '\n';
                    console.log(fileSplit);
                    console.log(fileSplit);
                    fileSplit.forEach(element => {
                        if((element != fileSplit[fileSplit.length-1]) && (element !=' ') && (element !='\n') && element != nombre){
                            newData = newData + element + '\n';
                        }
                        else if(element === fileSplit[fileSplit.length-1]){
                            newData = newData + element;
                        }
                    });
                    fs.writeFile(filename4, newData, (err) => {
                        if (err) throw err;
                    });
                });


            }
            if((messageSplit[0] === prefix + 'emp') && (messageSplit[1] != '\0')){
                console.log('theme choisit');
                let idSalon = messageSplit[1];
                idSalon = idSalon.slice(2, -1);
                console.log(idSalon);

                    //recherche nom dans liste
                    fs.readFile(filename3, 'utf8', function(err, data) {
                        if (err) throw err;
                        let fileSplit = data.split('\n');
                        let cpt = 0;
                        let numSalon;
                        idSalonb = JSON.stringify(idSalon) ;
                        console.log(idSalonb);
                        fileSplit.forEach(element => {
                            element = JSON.stringify(element);
                            console.log (element);
                            if (element === idSalonb){
                                numSalon = cpt;
                            }
                            cpt ++;
                        });
                        console.log(numSalon);
                        if(typeof numSalon !== 'undefined'){
                            fileSplit.splice(numSalon, 1);
                            fileSplit[0]= parseInt(fileSplit[0]) -1;
                            let newData = '';
                            fileSplit.forEach(element => {
                                if (element===fileSplit[fileSplit.length-1]){
                                    newData = newData + element;
                                }
                                else{
                                    newData = newData + element + '\n';
                                }
                            });
                            fs.writeFile(filename3, newData, (err) => {
                                if (err) throw err;
                            });
                            message.channel.send('--------------------------------------------------------------------------------------------------------------------------------------------');
                            message.channel.send(`Le thème choisit est <#` + idSalon +`>. C'est un très bon choix :blush: `);
                        }
                        else{
                            message.channel.send('--------------------------------------------------------------------------------------------------------------------------------------------');
                            message.channel.send(`Le thème choisit est <#` + idSalon +`>. J'aime bien ce thème. :grinning:`);
                        }
                        
                    });
                    
                
            }
            //Affichage liste des thèmes
            if((message.content === prefix + 'listAll')){
                fs.readFile(filename4, 'utf8', function(err, data) {
                    if (err) throw err;
                    let fileSplit = data.split('\n');
                    let msg = fileSplit[0] + '\n';
                    let cpt =0;
                    fileSplit.forEach(element => {
                        if(element != fileSplit[0]){
                            console.log(element);
                            msg = msg + '<#' + element +'>' + '\n';
                        }
                        if (cpt === 50){
                            cpt=0;
                            message.channel.send(msg);
                            msg = '';
                        }
                        cpt = cpt +1
                    });
                    //console.log(msg);
                    message.channel.send(msg);
                });
            }
            //Affichage liste des thèmes du concours
            if((message.content === prefix + 'list')){
                fs.readFile(filename3, 'utf8', function(err, data) {
                    if (err) throw err;
                    let fileSplit = data.split('\n');
                    let msg = fileSplit[0] + '\n';
                    let cpt =0;
                    fileSplit.forEach(element => {
                        if(element != fileSplit[0]){
                            console.log(element);
                            msg = msg + '<#' + element +'>' + '\n';
                        }
                        if (cpt === 50){
                            cpt=0;
                            message.channel.send(msg);
                            msg = '';
                        }
                        cpt = cpt +1
                    });
                    message.channel.send(msg);
                });
            }
            if(messageSplit[0] === 'Félicitation'){
                message.channel.send('Félicitation :tada:');
            }

            //Affichage aide commande
            if(message.content === prefix + 'help' && message.member.roles.cache.some(r => r.name === "second modo")){
                message.reply(`\n
    hello @Nevenaa : Pour me saluer :wave:\n
    I love you @Nevenaa: Pour me donner un peu d'amour :heart:\n
    !play : Pour jouer avec moi.\n
    @Nevenaa on discute? : Pour discuter avec moi\n
    Présente toi @Nevenaa : Je me présente au serveur ^^\n
    !list : Là c'est pour afficher la liste des catégories restantes pour le concours\n
    !listT : Ici on affiche la liste de toute les catégories possible pour le concours\n
    !emp #nomSalon : Tu sélectionnes la catégorie choisie par l'empereur\n
    !rand : Tu sélectionnes une catégorie au hazard\n
    !addSalon : Tu ajoutes une nouvelle catégorie au concours\n
    !go : Tu me laisses présenter le concours\n
    Félicitation ... : Je félicite les gens.`);
            }


            //Commandes perso
            if((message.content === prefix + 'help') && message.member.roles.cache.some(r => r.name === "modo")){
                message.reply(`\n
    hello @Nevenaa : Pour me saluer :wave:\n
    I love you @Nevenaa: Pour me donner un peu d'amour :heart:\n
    !play : Pour jouer avec moi.\n
    @Nevenaa on discute? : Pour discuter avec moi\n
    Présente toi @Nevenaa : Je me présente au serveur ^^\n
    !list : Là c'est pour afficher la liste des catégories restantes pour le concours\n
    !listAll : Ici on affiche la liste de toute les catégories possible pour le concours\n
    !emp #nomSalon : Tu sélectionnes la catégorie choisie par l'empereur\n
    !rand : Tu sélectionnes une catégorie au hazard\n
    !addSalon : Tu ajoutes une nouvelle catégorie au concours\n
    !go : Tu me laisses présenter le concours\n
    Félicitation ... : Je félicite les gens.\n
    !addList : C'est pour quand tu auras besoin de rajouter manuellement une catégorie à la liste\n
    !addListAll : C'est pour quand tu auras besoin de rajouter manuellement une catégorie à la liste complète\n
    !supprList : C'est pour quand tu auras besoin de supprimer manuellement une catégorie à la liste\n
    !supprListAll : C'est pour quand tu auras besoin de supprimer manuellement une catégorie à la liste complète\n`);}

    
            if(message.content === `<@!856570739784155166> ne fait pas d'avance à <@!463372556678987776>`){
                message.reply('Dsl :cry:');
            }
            if(message.content === `<@!856570739784155166> et si on faisait un peu de changement ici?` && message.member.roles.cache.some(r => r.name === "modo")){
                message.channel.send('Ho oui bonne idée')
                message.channel.send(`${youpi}`);
                message.channel.send(`Cette semaine fêtons 2 choses.\n
    D'abord l'anniversaire de notre bien-aimée <@322462530041675776> et ensuite mon arrivée sur ce serveur (en vrai ça fait une semaine que je me cache ici ^^)\n
    Alors pour fêter ça (surtout mon arrivée ^^) @everyone aujourd'hui je vous propose un concours un peu spécial.\n
    En plus du concours normal, je vous propose 3 choses.\n
    1. De trouver une nouvelle image au serveur.\n
    2. De me trouver une image qui m'irait bien :blush:\n
    3. De me trouver un nom joli petit nom :kissing_heart: .\n
    \n
    Je vous propose de mettre toutes vos idées dans <#857638882009808916>\n
    Vous pourrez voter pour toutes les propositions que vous aimez mais le choix définitif reviendra à <@322462530041675776>\n
    Bon concours ${pompom}`);
                message.channel.send("Voici ma pp pour le moment:", {files: ["Nevenaa.jpg"]});
            }




           
            //Supprimer élément dans liste de serv (pas touche minouche)
            if((messageSplit[0] === prefix + 'supprList') && (messageSplit[1] != '\0') && message.member.roles.cache.some(r => r.name === "modo")){
                console.log('theme supprimé');
                let idSalon = messageSplit[1];
                console.log(idSalon);
                idSalon = idSalon.slice(2, -1);
                console.log(idSalon);

                    //recherche nom dans liste
                    fs.readFile(filename3, 'utf8', function(err, data) {
                        if (err) throw err;
                        let fileSplit = data.split('\n');
                        fileSplit[0] = parseInt(fileSplit[0]) -1;
                        let newData = '';
                        fileSplit.forEach(element => {
                            if (element != idSalon){
                                if(element === fileSplit[fileSplit.length-1]){
                                    newData = newData + element;
                                }
                                else if(element === fileSplit[fileSplit.length-2] && fileSplit[fileSplit.length-1]===idSalon){
                                    newData = newData + element;
                                }
                                else{
                                    newData = newData + element + '\n';
                                }
                            }
                        });
                        fs.writeFile(filename3, newData, (err) => {
                            if (err) throw err;
                        });
                        message.channel.send('<#' + idSalon +'> supprimé de la liste');    
                    });
            }
            //Supprimer élément dans listeTotal de serv (pas touche minouche)
            if((messageSplit[0] === prefix + 'supprListAll') && (messageSplit[1] != '\0') && message.member.roles.cache.some(r => r.name === "modo")){
                console.log('theme supprimé');
                let idSalon = messageSplit[1];
                console.log(idSalon);
                idSalon = idSalon.slice(2, -1);
                console.log(idSalon);

                    //recherche nom dans liste
                    fs.readFile(filename4, 'utf8', function(err, data) {
                        if (err) throw err;
                        let fileSplit = data.split('\n');
                        fileSplit[0] = parseInt(fileSplit[0]) -1;
                        let newData = '';
                        fileSplit.forEach(element => {
                            if (element != idSalon){
                                if(element === fileSplit[fileSplit.length-1]){
                                    newData = newData + element;
                                }
                                else if(element === fileSplit[fileSplit.length-2] && fileSplit[fileSplit.length-1]===idSalon){
                                    newData = newData + element;
                                }
                                else{
                                    newData = newData + element + '\n';
                                }
                            }
                        });
                        fs.writeFile(filename4, newData, (err) => {
                            if (err) throw err;
                        });
                        message.channel.send('<#' + idSalon +'> supprimé de la liste');    
                    });
            }

            //Ajouter élémentdans liste de serv (pas touche minouche)
            if((messageSplit[0] === prefix + 'addList') && (messageSplit[1] != '\0') && message.member.roles.cache.some(r => r.name === "modo")){
                console.log('theme choisit');
                let idSalon = messageSplit[1];
                console.log(idSalon);
                console.log(idSalon);
                idSalon = idSalon.slice(2, -1);
                console.log(idSalon);

                    //recherche nom dans liste
                    fs.readFile(filename3, 'utf8', function(err, data) {
                        if (err) throw err;
                        let fileSplit = data.split('\n');
                        fileSplit[0] = parseInt(fileSplit[0]) +1;
                        fileSplit.push(idSalon);
                        let newData = '';
                        fileSplit.forEach(element => {
                            if(element === fileSplit[fileSplit.length-1]){
                                newData = newData + element;
                            }
                            else{
                                newData = newData + element + '\n';
                            }
                        });
                        fs.writeFile(filename3, newData, (err) => {
                            if (err) throw err;
                        });
                        message.channel.send('<#' + idSalon +'> ajouté à la liste');    
                    });
                    
                
            }
            //Ajouter une liste de serv Total (Pas touche minouche)
            if((messageSplit[0] === prefix + 'addListAll') && (messageSplit[1] != '\0') && message.member.roles.cache.some(r => r.name === "modo")){
                console.log('theme choisit');
                let idSalon = messageSplit[1];
                console.log(idSalon);
                //nomSalon = JSON.stringify(nomSalon);
                console.log(idSalon);
                idSalon = idSalon.slice(2, -1);
                console.log(idSalon);

                    //recherche nom dans liste
                    fs.readFile(filename4, 'utf8', function(err, data) {
                        if (err) throw err;
                        let fileSplit = data.split('\n');
                        fileSplit[0] = parseInt(fileSplit[0]) +1;
                        fileSplit.push(idSalon);
                        let newData = '';
                        fileSplit.forEach(element => {
                            if(element === fileSplit[fileSplit.length-1]){
                                newData = newData + element;
                            }
                            else{
                                newData = newData + element + '\n';
                            }
                        });
                        fs.writeFile(filename4, newData, (err) => {
                            if (err) throw err;
                        });
                        message.channel.send('<#' + idSalon +'> ajouté à la liste');    
                    });
                    
                
            } 
        }
        else{
           //Affichage aide commande
           if(message.content === prefix + 'help'){
            message.reply(`\n
hello @Nevenaa : Pour me saluer :wave:\n
I love you @Nevenaa: Pour me donner un peu d'amour :heart:\n
!play : Pour jouer avec moi.\n
@Nevenaa on discute? : Pour discuter avec moi\n`);
            }
        }   
    }
    /*fs.close(file_descriptor, (err) => {
        if (err)
          console.error('Failed to close file', err);
        else {
          console.log("\n> File Closed successfully");
        }
      });*/
    
});
  
Client.login(process.env.TOKEN);