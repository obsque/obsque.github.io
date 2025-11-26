
function graphColor(Job, Name) {
    if (localStorage.getItem('thema') == 1) {
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
                return '#7B9AA2'
            case 'WAR':
            case 'MRD':
                return '#A91A16'
            case 'DRK':
                return '#682531'
            case 'GNB':
                return '#796D30'
            case 'WHM':
            case 'CNJ':
                return '#BDBDBD'
            case 'SCH':
                return '#32307B'
            case 'AST':
                return '#B1561C'
            case 'SGE':
                return '#85C4D4'
            case 'MNK':
            case 'PGL':
            case "PUG":
                return '#B38915'
            case 'DRG':
            case 'LNC':
                return '#3752D8'
            case 'NIN':
            case 'ROG':
                return '#EE2E48'
            case 'SAM':
                return '#E45A0F'
            case 'RPR':
                return '#EADD6F'
            case 'VPR':
                return '#863E25'
            case 'BLM':
            case 'THM':
                return '#674598'
            case 'SMN':
            case 'ACN':
                return '#32670B'
            case 'RDM':
                return '#AC2997'
            case 'PCT':
                return '#D36A6D'
            case 'BLU':
                return '#183D9A'
            case 'BRD':
            case 'ARC':
                return '#ADC551'
            case 'MCH':
                return '#148AA9'
            case 'DNC':
                return '#E2B0AF'
            case 'LMB':
                return '#FFBB00'
            case 'CBO':
                return '#757575'
            default:
                return '#353535'
        }
    } else if (localStorage.getItem('thema') == 2) {
        $('#Body .barBg, .tableHeader, .nav').css('background', 'rgba(255,255,255, .1)')
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
                return '#bdd2cb'
            case 'WAR':
            case 'MRD':
                return '#f8a185'
            case 'DRK':
                return '#e9c2c7'
            case 'GNB':
                return '#a49e7c'
            case 'WHM':
            case 'CNJ':
                return '#f3f5e7'
            case 'SCH':
                return '#b8b8d4'
            case 'AST':
                return '#e5b99d'
            case 'SGE':
                return '#a5d5e1'
            case 'MNK':
            case 'PGL':
            case "PUG":
                return '#cec0a3'
            case 'DRG':
            case 'LNC':
                return '#abc3e5'
            case 'NIN':
            case 'ROG':
                return '#fbc1b3'
            case 'SAM':
                return '#fec983'
            case 'RPR':
                return '#f2e896'
            case 'VPR':
                return '#dca08c'
            case 'BLM':
            case 'THM':
                return '#c9b8da'
            case 'SMN':
            case 'ACN':
                return '#82c99d'
            case 'RDM':
                return '#f7bdcb'
            case 'PCT':
                return '#df989a'
            case 'BLU':
                return '#4db3fd'
            case 'BRD':
            case 'ARC':
                return '#d4e5a1'
            case 'MCH':
                return '#a2d5c6'
            case 'DNC':
                return '#f3cecd'
            case 'LMB':
                return '#fdf5a4'
            case 'CBO':
                return '#b8b8b8'
            default:
                return '#6e6e6e'
        }
    } else if (localStorage.getItem('thema') == 3) {
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
            case 'WAR':
            case 'MRD':
            case 'DRK':
            case 'GNB':
                return '#475ece'
            case 'WHM':
            case 'CNJ':
            case 'SCH':
            case 'AST':
            case 'SGE':
                return '#467837'
            case 'MNK':
            case 'PGL':
            case "PUG":
            case 'DRG':
            case 'LNC':
            case 'SAM':
            case 'RPR':
            case 'VPR':
            case 'BLM':
            case 'THM':
            case 'SMN':
            case 'ACN':
            case 'RDM':
            case 'PCT':
            case 'BLU':
            case 'BRD':
            case 'ARC':
            case 'MCH':
            case 'DNC':
            case 'NIN':
            case 'ROG':
                return '#813b3c'
            case 'LMB':
                return '#FFBB00'
            case 'CBO':
                return '#757575'
            default:
                return '#353535'
        }
    } else if (localStorage.getItem('thema') == 4) {
        if (Name.indexOf("YOU") > -1 || Name.indexOf(myName) > -1) return '#0db9ab'
        else return '#361e11'
    } else if (localStorage.getItem('thema') == 5) {
        $('#Body').find('.barBg, .bar, .pet, .ds, .oh').css('background', 'rgba(0,0,0,0)')
        $('#Body .divider').css('background', 'rgba(255,255,255,.1)')
        $('.nav, .tableHeader').css('background', 'rgba(0,0,0,0)')
        $('.DPS, .HPS').css('color', '#68efad');
        $('.Death').css('color', '#ff5252');
        $('#Body').find('#YOU .tableBody td, .myPet .tableBody td').css('color', '#EEFF41');
        $('#zone').css('background', 'transparent');
    } else if (localStorage.getItem('thema') == 6) {
        $('#Body .barBg, .tableHeader, .nav').css('background', 'rgba(255,255,255, .1)')
        switch (Job) {
            case 'GLA':
            case 'GLD':
            case 'PLD':
                return '#fda4ba'
            case 'WAR':
            case 'MRD':
                return '#fec5e5'
            case 'DRK':
                return '#f69acd'
            case 'GNB':
                return '#da86b4'
            case 'WHM':
            case 'CNJ':
                return '#fb9483'
            case 'SCH':
                return '#fdab9f'
            case 'AST':
                return '#f2b8c6'
            case 'SGE':
                return '#dd90c0'
            case 'MNK':
            case 'PGL':
            case "PUG":
                return '#fa86c3'
            case 'DRG':
            case 'LNC':
                return '#ff1695'
            case 'NIN':
            case 'ROG':
                return '#fc46aa'
            case 'SAM':
                return '#fe5da9'
            case 'RPR':
                return '#daaae3'
            case 'VPR':
                return '#dc8caa'
            case 'BLM':
            case 'THM':
                return '#f25278'
            case 'SMN':
            case 'ACN':
                return '#f26b8b'
            case 'RDM':
                return '#f69abf'
            case 'PCT':
                return '#df989a'
            case 'BLU':
                return '#ec8fa5'
            case 'BRD':
            case 'ARC':
                return '#fe7f9c'
            case 'MCH':
                return '#fc94af'
            case 'DNC':
                return '#e8acd2'
            case 'LMB':
                return '#fc4c4e'
            case 'CBO':
                return '#9e4245'
            default:
                return '#6e6e6e'
        }
    } else if (localStorage.getItem('thema') == 7) {
        $('#Body').find('.barBg').css('background', 'rgba(0,0,0,0.1)')
        if (Name.indexOf("YOU") > -1 || Name.indexOf(myName) > -1)
            return 'linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet)'
        else
            return '#EAEAEA'
    }
}
