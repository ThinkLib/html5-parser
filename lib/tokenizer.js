(function(exports) {
  'use strict';

  var namedCharacters = {"AElig;":[198],"AMP;":[38],"Aacute;":[193],"Abreve;":[258],"Acirc;":[194],"Acy;":[1040],"Afr;":[55349,56580],"Agrave;":[192],"Alpha;":[913],"Amacr;":[256],"And;":[10835],"Aogon;":[260],"Aopf;":[55349,56632],"ApplyFunction;":[8289],"Aring;":[197],"Ascr;":[55349,56476],"Assign;":[8788],"Atilde;":[195],"Auml;":[196],"Backslash;":[8726],"Barv;":[10983],"Barwed;":[8966],"Bcy;":[1041],"Because;":[8757],"Bernoullis;":[8492],"Beta;":[914],"Bfr;":[55349,56581],"Bopf;":[55349,56633],"Breve;":[728],"Bscr;":[8492],"Bumpeq;":[8782],"CHcy;":[1063],"COPY;":[169],"Cacute;":[262],"Cap;":[8914],"CapitalDifferentialD;":[8517],"Cayleys;":[8493],"Ccaron;":[268],"Ccedil;":[199],"Ccirc;":[264],"Cconint;":[8752],"Cdot;":[266],"Cedilla;":[184],"CenterDot;":[183],"Cfr;":[8493],"Chi;":[935],"CircleDot;":[8857],"CircleMinus;":[8854],"CirclePlus;":[8853],"CircleTimes;":[8855],"ClockwiseContourIntegral;":[8754],"CloseCurlyDoubleQuote;":[8221],"CloseCurlyQuote;":[8217],"Colon;":[8759],"Colone;":[10868],"Congruent;":[8801],"Conint;":[8751],"ContourIntegral;":[8750],"Copf;":[8450],"Coproduct;":[8720],"CounterClockwiseContourIntegral;":[8755],"Cross;":[10799],"Cscr;":[55349,56478],"Cup;":[8915],"CupCap;":[8781],"DD;":[8517],"DDotrahd;":[10513],"DJcy;":[1026],"DScy;":[1029],"DZcy;":[1039],"Dagger;":[8225],"Darr;":[8609],"Dashv;":[10980],"Dcaron;":[270],"Dcy;":[1044],"Del;":[8711],"Delta;":[916],"Dfr;":[55349,56583],"DiacriticalAcute;":[180],"DiacriticalDot;":[729],"DiacriticalDoubleAcute;":[733],"DiacriticalGrave;":[96],"DiacriticalTilde;":[732],"Diamond;":[8900],"DifferentialD;":[8518],"Dopf;":[55349,56635],"Dot;":[168],"DotDot;":[8412],"DotEqual;":[8784],"DoubleContourIntegral;":[8751],"DoubleDot;":[168],"DoubleDownArrow;":[8659],"DoubleLeftArrow;":[8656],"DoubleLeftRightArrow;":[8660],"DoubleLeftTee;":[10980],"DoubleLongLeftArrow;":[10232],"DoubleLongLeftRightArrow;":[10234],"DoubleLongRightArrow;":[10233],"DoubleRightArrow;":[8658],"DoubleRightTee;":[8872],"DoubleUpArrow;":[8657],"DoubleUpDownArrow;":[8661],"DoubleVerticalBar;":[8741],"DownArrow;":[8595],"DownArrowBar;":[10515],"DownArrowUpArrow;":[8693],"DownBreve;":[785],"DownLeftRightVector;":[10576],"DownLeftTeeVector;":[10590],"DownLeftVector;":[8637],"DownLeftVectorBar;":[10582],"DownRightTeeVector;":[10591],"DownRightVector;":[8641],"DownRightVectorBar;":[10583],"DownTee;":[8868],"DownTeeArrow;":[8615],"Downarrow;":[8659],"Dscr;":[55349,56479],"Dstrok;":[272],"ENG;":[330],"ETH;":[208],"Eacute;":[201],"Ecaron;":[282],"Ecirc;":[202],"Ecy;":[1069],"Edot;":[278],"Efr;":[55349,56584],"Egrave;":[200],"Element;":[8712],"Emacr;":[274],"EmptySmallSquare;":[9723],"EmptyVerySmallSquare;":[9643],"Eogon;":[280],"Eopf;":[55349,56636],"Epsilon;":[917],"Equal;":[10869],"EqualTilde;":[8770],"Equilibrium;":[8652],"Escr;":[8496],"Esim;":[10867],"Eta;":[919],"Euml;":[203],"Exists;":[8707],"ExponentialE;":[8519],"Fcy;":[1060],"Ffr;":[55349,56585],"FilledSmallSquare;":[9724],"FilledVerySmallSquare;":[9642],"Fopf;":[55349,56637],"ForAll;":[8704],"Fouriertrf;":[8497],"Fscr;":[8497],"GJcy;":[1027],"GT;":[62],"Gamma;":[915],"Gammad;":[988],"Gbreve;":[286],"Gcedil;":[290],"Gcirc;":[284],"Gcy;":[1043],"Gdot;":[288],"Gfr;":[55349,56586],"Gg;":[8921],"Gopf;":[55349,56638],"GreaterEqual;":[8805],"GreaterEqualLess;":[8923],"GreaterFullEqual;":[8807],"GreaterGreater;":[10914],"GreaterLess;":[8823],"GreaterSlantEqual;":[10878],"GreaterTilde;":[8819],"Gscr;":[55349,56482],"Gt;":[8811],"HARDcy;":[1066],"Hacek;":[711],"Hat;":[94],"Hcirc;":[292],"Hfr;":[8460],"HilbertSpace;":[8459],"Hopf;":[8461],"HorizontalLine;":[9472],"Hscr;":[8459],"Hstrok;":[294],"HumpDownHump;":[8782],"HumpEqual;":[8783],"IEcy;":[1045],"IJlig;":[306],"IOcy;":[1025],"Iacute;":[205],"Icirc;":[206],"Icy;":[1048],"Idot;":[304],"Ifr;":[8465],"Igrave;":[204],"Im;":[8465],"Imacr;":[298],"ImaginaryI;":[8520],"Implies;":[8658],"Int;":[8748],"Integral;":[8747],"Intersection;":[8898],"InvisibleComma;":[8291],"InvisibleTimes;":[8290],"Iogon;":[302],"Iopf;":[55349,56640],"Iota;":[921],"Iscr;":[8464],"Itilde;":[296],"Iukcy;":[1030],"Iuml;":[207],"Jcirc;":[308],"Jcy;":[1049],"Jfr;":[55349,56589],"Jopf;":[55349,56641],"Jscr;":[55349,56485],"Jsercy;":[1032],"Jukcy;":[1028],"KHcy;":[1061],"KJcy;":[1036],"Kappa;":[922],"Kcedil;":[310],"Kcy;":[1050],"Kfr;":[55349,56590],"Kopf;":[55349,56642],"Kscr;":[55349,56486],"LJcy;":[1033],"LT;":[60],"Lacute;":[313],"Lambda;":[923],"Lang;":[10218],"Laplacetrf;":[8466],"Larr;":[8606],"Lcaron;":[317],"Lcedil;":[315],"Lcy;":[1051],"LeftAngleBracket;":[10216],"LeftArrow;":[8592],"LeftArrowBar;":[8676],"LeftArrowRightArrow;":[8646],"LeftCeiling;":[8968],"LeftDoubleBracket;":[10214],"LeftDownTeeVector;":[10593],"LeftDownVector;":[8643],"LeftDownVectorBar;":[10585],"LeftFloor;":[8970],"LeftRightArrow;":[8596],"LeftRightVector;":[10574],"LeftTee;":[8867],"LeftTeeArrow;":[8612],"LeftTeeVector;":[10586],"LeftTriangle;":[8882],"LeftTriangleBar;":[10703],"LeftTriangleEqual;":[8884],"LeftUpDownVector;":[10577],"LeftUpTeeVector;":[10592],"LeftUpVector;":[8639],"LeftUpVectorBar;":[10584],"LeftVector;":[8636],"LeftVectorBar;":[10578],"Leftarrow;":[8656],"Leftrightarrow;":[8660],"LessEqualGreater;":[8922],"LessFullEqual;":[8806],"LessGreater;":[8822],"LessLess;":[10913],"LessSlantEqual;":[10877],"LessTilde;":[8818],"Lfr;":[55349,56591],"Ll;":[8920],"Lleftarrow;":[8666],"Lmidot;":[319],"LongLeftArrow;":[10229],"LongLeftRightArrow;":[10231],"LongRightArrow;":[10230],"Longleftarrow;":[10232],"Longleftrightarrow;":[10234],"Longrightarrow;":[10233],"Lopf;":[55349,56643],"LowerLeftArrow;":[8601],"LowerRightArrow;":[8600],"Lscr;":[8466],"Lsh;":[8624],"Lstrok;":[321],"Lt;":[8810],"Map;":[10501],"Mcy;":[1052],"MediumSpace;":[8287],"Mellintrf;":[8499],"Mfr;":[55349,56592],"MinusPlus;":[8723],"Mopf;":[55349,56644],"Mscr;":[8499],"Mu;":[924],"NJcy;":[1034],"Nacute;":[323],"Ncaron;":[327],"Ncedil;":[325],"Ncy;":[1053],"NegativeMediumSpace;":[8203],"NegativeThickSpace;":[8203],"NegativeThinSpace;":[8203],"NegativeVeryThinSpace;":[8203],"NestedGreaterGreater;":[8811],"NestedLessLess;":[8810],"NewLine;":[10],"Nfr;":[55349,56593],"NoBreak;":[8288],"NonBreakingSpace;":[160],"Nopf;":[8469],"Not;":[10988],"NotCongruent;":[8802],"NotCupCap;":[8813],"NotDoubleVerticalBar;":[8742],"NotElement;":[8713],"NotEqual;":[8800],"NotEqualTilde;":[8770,824],"NotExists;":[8708],"NotGreater;":[8815],"NotGreaterEqual;":[8817],"NotGreaterFullEqual;":[8807,824],"NotGreaterGreater;":[8811,824],"NotGreaterLess;":[8825],"NotGreaterSlantEqual;":[10878,824],"NotGreaterTilde;":[8821],"NotHumpDownHump;":[8782,824],"NotHumpEqual;":[8783,824],"NotLeftTriangle;":[8938],"NotLeftTriangleBar;":[10703,824],"NotLeftTriangleEqual;":[8940],"NotLess;":[8814],"NotLessEqual;":[8816],"NotLessGreater;":[8824],"NotLessLess;":[8810,824],"NotLessSlantEqual;":[10877,824],"NotLessTilde;":[8820],"NotNestedGreaterGreater;":[10914,824],"NotNestedLessLess;":[10913,824],"NotPrecedes;":[8832],"NotPrecedesEqual;":[10927,824],"NotPrecedesSlantEqual;":[8928],"NotReverseElement;":[8716],"NotRightTriangle;":[8939],"NotRightTriangleBar;":[10704,824],"NotRightTriangleEqual;":[8941],"NotSquareSubset;":[8847,824],"NotSquareSubsetEqual;":[8930],"NotSquareSuperset;":[8848,824],"NotSquareSupersetEqual;":[8931],"NotSubset;":[8834,8402],"NotSubsetEqual;":[8840],"NotSucceeds;":[8833],"NotSucceedsEqual;":[10928,824],"NotSucceedsSlantEqual;":[8929],"NotSucceedsTilde;":[8831,824],"NotSuperset;":[8835,8402],"NotSupersetEqual;":[8841],"NotTilde;":[8769],"NotTildeEqual;":[8772],"NotTildeFullEqual;":[8775],"NotTildeTilde;":[8777],"NotVerticalBar;":[8740],"Nscr;":[55349,56489],"Ntilde;":[209],"Nu;":[925],"OElig;":[338],"Oacute;":[211],"Ocirc;":[212],"Ocy;":[1054],"Odblac;":[336],"Ofr;":[55349,56594],"Ograve;":[210],"Omacr;":[332],"Omega;":[937],"Omicron;":[927],"Oopf;":[55349,56646],"OpenCurlyDoubleQuote;":[8220],"OpenCurlyQuote;":[8216],"Or;":[10836],"Oscr;":[55349,56490],"Oslash;":[216],"Otilde;":[213],"Otimes;":[10807],"Ouml;":[214],"OverBar;":[8254],"OverBrace;":[9182],"OverBracket;":[9140],"OverParenthesis;":[9180],"PartialD;":[8706],"Pcy;":[1055],"Pfr;":[55349,56595],"Phi;":[934],"Pi;":[928],"PlusMinus;":[177],"Poincareplane;":[8460],"Popf;":[8473],"Pr;":[10939],"Precedes;":[8826],"PrecedesEqual;":[10927],"PrecedesSlantEqual;":[8828],"PrecedesTilde;":[8830],"Prime;":[8243],"Product;":[8719],"Proportion;":[8759],"Proportional;":[8733],"Pscr;":[55349,56491],"Psi;":[936],"QUOT;":[34],"Qfr;":[55349,56596],"Qopf;":[8474],"Qscr;":[55349,56492],"RBarr;":[10512],"REG;":[174],"Racute;":[340],"Rang;":[10219],"Rarr;":[8608],"Rarrtl;":[10518],"Rcaron;":[344],"Rcedil;":[342],"Rcy;":[1056],"Re;":[8476],"ReverseElement;":[8715],"ReverseEquilibrium;":[8651],"ReverseUpEquilibrium;":[10607],"Rfr;":[8476],"Rho;":[929],"RightAngleBracket;":[10217],"RightArrow;":[8594],"RightArrowBar;":[8677],"RightArrowLeftArrow;":[8644],"RightCeiling;":[8969],"RightDoubleBracket;":[10215],"RightDownTeeVector;":[10589],"RightDownVector;":[8642],"RightDownVectorBar;":[10581],"RightFloor;":[8971],"RightTee;":[8866],"RightTeeArrow;":[8614],"RightTeeVector;":[10587],"RightTriangle;":[8883],"RightTriangleBar;":[10704],"RightTriangleEqual;":[8885],"RightUpDownVector;":[10575],"RightUpTeeVector;":[10588],"RightUpVector;":[8638],"RightUpVectorBar;":[10580],"RightVector;":[8640],"RightVectorBar;":[10579],"Rightarrow;":[8658],"Ropf;":[8477],"RoundImplies;":[10608],"Rrightarrow;":[8667],"Rscr;":[8475],"Rsh;":[8625],"RuleDelayed;":[10740],"SHCHcy;":[1065],"SHcy;":[1064],"SOFTcy;":[1068],"Sacute;":[346],"Sc;":[10940],"Scaron;":[352],"Scedil;":[350],"Scirc;":[348],"Scy;":[1057],"Sfr;":[55349,56598],"ShortDownArrow;":[8595],"ShortLeftArrow;":[8592],"ShortRightArrow;":[8594],"ShortUpArrow;":[8593],"Sigma;":[931],"SmallCircle;":[8728],"Sopf;":[55349,56650],"Sqrt;":[8730],"Square;":[9633],"SquareIntersection;":[8851],"SquareSubset;":[8847],"SquareSubsetEqual;":[8849],"SquareSuperset;":[8848],"SquareSupersetEqual;":[8850],"SquareUnion;":[8852],"Sscr;":[55349,56494],"Star;":[8902],"Sub;":[8912],"Subset;":[8912],"SubsetEqual;":[8838],"Succeeds;":[8827],"SucceedsEqual;":[10928],"SucceedsSlantEqual;":[8829],"SucceedsTilde;":[8831],"SuchThat;":[8715],"Sum;":[8721],"Sup;":[8913],"Superset;":[8835],"SupersetEqual;":[8839],"Supset;":[8913],"THORN;":[222],"TRADE;":[8482],"TSHcy;":[1035],"TScy;":[1062],"Tab;":[9],"Tau;":[932],"Tcaron;":[356],"Tcedil;":[354],"Tcy;":[1058],"Tfr;":[55349,56599],"Therefore;":[8756],"Theta;":[920],"ThickSpace;":[8287,8202],"ThinSpace;":[8201],"Tilde;":[8764],"TildeEqual;":[8771],"TildeFullEqual;":[8773],"TildeTilde;":[8776],"Topf;":[55349,56651],"TripleDot;":[8411],"Tscr;":[55349,56495],"Tstrok;":[358],"Uacute;":[218],"Uarr;":[8607],"Uarrocir;":[10569],"Ubrcy;":[1038],"Ubreve;":[364],"Ucirc;":[219],"Ucy;":[1059],"Udblac;":[368],"Ufr;":[55349,56600],"Ugrave;":[217],"Umacr;":[362],"UnderBar;":[95],"UnderBrace;":[9183],"UnderBracket;":[9141],"UnderParenthesis;":[9181],"Union;":[8899],"UnionPlus;":[8846],"Uogon;":[370],"Uopf;":[55349,56652],"UpArrow;":[8593],"UpArrowBar;":[10514],"UpArrowDownArrow;":[8645],"UpDownArrow;":[8597],"UpEquilibrium;":[10606],"UpTee;":[8869],"UpTeeArrow;":[8613],"Uparrow;":[8657],"Updownarrow;":[8661],"UpperLeftArrow;":[8598],"UpperRightArrow;":[8599],"Upsi;":[978],"Upsilon;":[933],"Uring;":[366],"Uscr;":[55349,56496],"Utilde;":[360],"Uuml;":[220],"VDash;":[8875],"Vbar;":[10987],"Vcy;":[1042],"Vdash;":[8873],"Vdashl;":[10982],"Vee;":[8897],"Verbar;":[8214],"Vert;":[8214],"VerticalBar;":[8739],"VerticalLine;":[124],"VerticalSeparator;":[10072],"VerticalTilde;":[8768],"VeryThinSpace;":[8202],"Vfr;":[55349,56601],"Vopf;":[55349,56653],"Vscr;":[55349,56497],"Vvdash;":[8874],"Wcirc;":[372],"Wedge;":[8896],"Wfr;":[55349,56602],"Wopf;":[55349,56654],"Wscr;":[55349,56498],"Xfr;":[55349,56603],"Xi;":[926],"Xopf;":[55349,56655],"Xscr;":[55349,56499],"YAcy;":[1071],"YIcy;":[1031],"YUcy;":[1070],"Yacute;":[221],"Ycirc;":[374],"Ycy;":[1067],"Yfr;":[55349,56604],"Yopf;":[55349,56656],"Yscr;":[55349,56500],"Yuml;":[376],"ZHcy;":[1046],"Zacute;":[377],"Zcaron;":[381],"Zcy;":[1047],"Zdot;":[379],"ZeroWidthSpace;":[8203],"Zeta;":[918],"Zfr;":[8488],"Zopf;":[8484],"Zscr;":[55349,56501],"aacute;":[225],"abreve;":[259],"ac;":[8766],"acE;":[8766,819],"acd;":[8767],"acirc;":[226],"acute;":[180],"acy;":[1072],"aelig;":[230],"af;":[8289],"afr;":[55349,56606],"agrave;":[224],"alefsym;":[8501],"aleph;":[8501],"alpha;":[945],"amacr;":[257],"amalg;":[10815],"amp;":[38],"and;":[8743],"andand;":[10837],"andd;":[10844],"andslope;":[10840],"andv;":[10842],"ang;":[8736],"ange;":[10660],"angle;":[8736],"angmsd;":[8737],"angmsdaa;":[10664],"angmsdab;":[10665],"angmsdac;":[10666],"angmsdad;":[10667],"angmsdae;":[10668],"angmsdaf;":[10669],"angmsdag;":[10670],"angmsdah;":[10671],"angrt;":[8735],"angrtvb;":[8894],"angrtvbd;":[10653],"angsph;":[8738],"angst;":[197],"angzarr;":[9084],"aogon;":[261],"aopf;":[55349,56658],"ap;":[8776],"apE;":[10864],"apacir;":[10863],"ape;":[8778],"apid;":[8779],"apos;":[39],"approx;":[8776],"approxeq;":[8778],"aring;":[229],"ascr;":[55349,56502],"ast;":[42],"asymp;":[8776],"asympeq;":[8781],"atilde;":[227],"auml;":[228],"awconint;":[8755],"awint;":[10769],"bNot;":[10989],"backcong;":[8780],"backepsilon;":[1014],"backprime;":[8245],"backsim;":[8765],"backsimeq;":[8909],"barvee;":[8893],"barwed;":[8965],"barwedge;":[8965],"bbrk;":[9141],"bbrktbrk;":[9142],"bcong;":[8780],"bcy;":[1073],"bdquo;":[8222],"becaus;":[8757],"because;":[8757],"bemptyv;":[10672],"bepsi;":[1014],"bernou;":[8492],"beta;":[946],"beth;":[8502],"between;":[8812],"bfr;":[55349,56607],"bigcap;":[8898],"bigcirc;":[9711],"bigcup;":[8899],"bigodot;":[10752],"bigoplus;":[10753],"bigotimes;":[10754],"bigsqcup;":[10758],"bigstar;":[9733],"bigtriangledown;":[9661],"bigtriangleup;":[9651],"biguplus;":[10756],"bigvee;":[8897],"bigwedge;":[8896],"bkarow;":[10509],"blacklozenge;":[10731],"blacksquare;":[9642],"blacktriangle;":[9652],"blacktriangledown;":[9662],"blacktriangleleft;":[9666],"blacktriangleright;":[9656],"blank;":[9251],"blk12;":[9618],"blk14;":[9617],"blk34;":[9619],"block;":[9608],"bne;":[61,8421],"bnequiv;":[8801,8421],"bnot;":[8976],"bopf;":[55349,56659],"bot;":[8869],"bottom;":[8869],"bowtie;":[8904],"boxDL;":[9559],"boxDR;":[9556],"boxDl;":[9558],"boxDr;":[9555],"boxH;":[9552],"boxHD;":[9574],"boxHU;":[9577],"boxHd;":[9572],"boxHu;":[9575],"boxUL;":[9565],"boxUR;":[9562],"boxUl;":[9564],"boxUr;":[9561],"boxV;":[9553],"boxVH;":[9580],"boxVL;":[9571],"boxVR;":[9568],"boxVh;":[9579],"boxVl;":[9570],"boxVr;":[9567],"boxbox;":[10697],"boxdL;":[9557],"boxdR;":[9554],"boxdl;":[9488],"boxdr;":[9484],"boxh;":[9472],"boxhD;":[9573],"boxhU;":[9576],"boxhd;":[9516],"boxhu;":[9524],"boxminus;":[8863],"boxplus;":[8862],"boxtimes;":[8864],"boxuL;":[9563],"boxuR;":[9560],"boxul;":[9496],"boxur;":[9492],"boxv;":[9474],"boxvH;":[9578],"boxvL;":[9569],"boxvR;":[9566],"boxvh;":[9532],"boxvl;":[9508],"boxvr;":[9500],"bprime;":[8245],"breve;":[728],"brvbar;":[166],"bscr;":[55349,56503],"bsemi;":[8271],"bsim;":[8765],"bsime;":[8909],"bsol;":[92],"bsolb;":[10693],"bsolhsub;":[10184],"bull;":[8226],"bullet;":[8226],"bump;":[8782],"bumpE;":[10926],"bumpe;":[8783],"bumpeq;":[8783],"cacute;":[263],"cap;":[8745],"capand;":[10820],"capbrcup;":[10825],"capcap;":[10827],"capcup;":[10823],"capdot;":[10816],"caps;":[8745,65024],"caret;":[8257],"caron;":[711],"ccaps;":[10829],"ccaron;":[269],"ccedil;":[231],"ccirc;":[265],"ccups;":[10828],"ccupssm;":[10832],"cdot;":[267],"cedil;":[184],"cemptyv;":[10674],"cent;":[162],"centerdot;":[183],"cfr;":[55349,56608],"chcy;":[1095],"check;":[10003],"checkmark;":[10003],"chi;":[967],"cir;":[9675],"cirE;":[10691],"circ;":[710],"circeq;":[8791],"circlearrowleft;":[8634],"circlearrowright;":[8635],"circledR;":[174],"circledS;":[9416],"circledast;":[8859],"circledcirc;":[8858],"circleddash;":[8861],"cire;":[8791],"cirfnint;":[10768],"cirmid;":[10991],"cirscir;":[10690],"clubs;":[9827],"clubsuit;":[9827],"colon;":[58],"colone;":[8788],"coloneq;":[8788],"comma;":[44],"commat;":[64],"comp;":[8705],"compfn;":[8728],"complement;":[8705],"complexes;":[8450],"cong;":[8773],"congdot;":[10861],"conint;":[8750],"copf;":[55349,56660],"coprod;":[8720],"copy;":[169],"copysr;":[8471],"crarr;":[8629],"cross;":[10007],"cscr;":[55349,56504],"csub;":[10959],"csube;":[10961],"csup;":[10960],"csupe;":[10962],"ctdot;":[8943],"cudarrl;":[10552],"cudarrr;":[10549],"cuepr;":[8926],"cuesc;":[8927],"cularr;":[8630],"cularrp;":[10557],"cup;":[8746],"cupbrcap;":[10824],"cupcap;":[10822],"cupcup;":[10826],"cupdot;":[8845],"cupor;":[10821],"cups;":[8746,65024],"curarr;":[8631],"curarrm;":[10556],"curlyeqprec;":[8926],"curlyeqsucc;":[8927],"curlyvee;":[8910],"curlywedge;":[8911],"curren;":[164],"curvearrowleft;":[8630],"curvearrowright;":[8631],"cuvee;":[8910],"cuwed;":[8911],"cwconint;":[8754],"cwint;":[8753],"cylcty;":[9005],"dArr;":[8659],"dHar;":[10597],"dagger;":[8224],"daleth;":[8504],"darr;":[8595],"dash;":[8208],"dashv;":[8867],"dbkarow;":[10511],"dblac;":[733],"dcaron;":[271],"dcy;":[1076],"dd;":[8518],"ddagger;":[8225],"ddarr;":[8650],"ddotseq;":[10871],"deg;":[176],"delta;":[948],"demptyv;":[10673],"dfisht;":[10623],"dfr;":[55349,56609],"dharl;":[8643],"dharr;":[8642],"diam;":[8900],"diamond;":[8900],"diamondsuit;":[9830],"diams;":[9830],"die;":[168],"digamma;":[989],"disin;":[8946],"div;":[247],"divide;":[247],"divideontimes;":[8903],"divonx;":[8903],"djcy;":[1106],"dlcorn;":[8990],"dlcrop;":[8973],"dollar;":[36],"dopf;":[55349,56661],"dot;":[729],"doteq;":[8784],"doteqdot;":[8785],"dotminus;":[8760],"dotplus;":[8724],"dotsquare;":[8865],"doublebarwedge;":[8966],"downarrow;":[8595],"downdownarrows;":[8650],"downharpoonleft;":[8643],"downharpoonright;":[8642],"drbkarow;":[10512],"drcorn;":[8991],"drcrop;":[8972],"dscr;":[55349,56505],"dscy;":[1109],"dsol;":[10742],"dstrok;":[273],"dtdot;":[8945],"dtri;":[9663],"dtrif;":[9662],"duarr;":[8693],"duhar;":[10607],"dwangle;":[10662],"dzcy;":[1119],"dzigrarr;":[10239],"eDDot;":[10871],"eDot;":[8785],"eacute;":[233],"easter;":[10862],"ecaron;":[283],"ecir;":[8790],"ecirc;":[234],"ecolon;":[8789],"ecy;":[1101],"edot;":[279],"ee;":[8519],"efDot;":[8786],"efr;":[55349,56610],"eg;":[10906],"egrave;":[232],"egs;":[10902],"egsdot;":[10904],"el;":[10905],"elinters;":[9191],"ell;":[8467],"els;":[10901],"elsdot;":[10903],"emacr;":[275],"empty;":[8709],"emptyset;":[8709],"emptyv;":[8709],"emsp;":[8195],"emsp13;":[8196],"emsp14;":[8197],"eng;":[331],"ensp;":[8194],"eogon;":[281],"eopf;":[55349,56662],"epar;":[8917],"eparsl;":[10723],"eplus;":[10865],"epsi;":[949],"epsilon;":[949],"epsiv;":[1013],"eqcirc;":[8790],"eqcolon;":[8789],"eqsim;":[8770],"eqslantgtr;":[10902],"eqslantless;":[10901],"equals;":[61],"equest;":[8799],"equiv;":[8801],"equivDD;":[10872],"eqvparsl;":[10725],"erDot;":[8787],"erarr;":[10609],"escr;":[8495],"esdot;":[8784],"esim;":[8770],"eta;":[951],"eth;":[240],"euml;":[235],"euro;":[8364],"excl;":[33],"exist;":[8707],"expectation;":[8496],"exponentiale;":[8519],"fallingdotseq;":[8786],"fcy;":[1092],"female;":[9792],"ffilig;":[64259],"fflig;":[64256],"ffllig;":[64260],"ffr;":[55349,56611],"filig;":[64257],"fjlig;":[102,106],"flat;":[9837],"fllig;":[64258],"fltns;":[9649],"fnof;":[402],"fopf;":[55349,56663],"forall;":[8704],"fork;":[8916],"forkv;":[10969],"fpartint;":[10765],"frac12;":[189],"frac13;":[8531],"frac14;":[188],"frac15;":[8533],"frac16;":[8537],"frac18;":[8539],"frac23;":[8532],"frac25;":[8534],"frac34;":[190],"frac35;":[8535],"frac38;":[8540],"frac45;":[8536],"frac56;":[8538],"frac58;":[8541],"frac78;":[8542],"frasl;":[8260],"frown;":[8994],"fscr;":[55349,56507],"gE;":[8807],"gEl;":[10892],"gacute;":[501],"gamma;":[947],"gammad;":[989],"gap;":[10886],"gbreve;":[287],"gcirc;":[285],"gcy;":[1075],"gdot;":[289],"ge;":[8805],"gel;":[8923],"geq;":[8805],"geqq;":[8807],"geqslant;":[10878],"ges;":[10878],"gescc;":[10921],"gesdot;":[10880],"gesdoto;":[10882],"gesdotol;":[10884],"gesl;":[8923,65024],"gesles;":[10900],"gfr;":[55349,56612],"gg;":[8811],"ggg;":[8921],"gimel;":[8503],"gjcy;":[1107],"gl;":[8823],"glE;":[10898],"gla;":[10917],"glj;":[10916],"gnE;":[8809],"gnap;":[10890],"gnapprox;":[10890],"gne;":[10888],"gneq;":[10888],"gneqq;":[8809],"gnsim;":[8935],"gopf;":[55349,56664],"grave;":[96],"gscr;":[8458],"gsim;":[8819],"gsime;":[10894],"gsiml;":[10896],"gt;":[62],"gtcc;":[10919],"gtcir;":[10874],"gtdot;":[8919],"gtlPar;":[10645],"gtquest;":[10876],"gtrapprox;":[10886],"gtrarr;":[10616],"gtrdot;":[8919],"gtreqless;":[8923],"gtreqqless;":[10892],"gtrless;":[8823],"gtrsim;":[8819],"gvertneqq;":[8809,65024],"gvnE;":[8809,65024],"hArr;":[8660],"hairsp;":[8202],"half;":[189],"hamilt;":[8459],"hardcy;":[1098],"harr;":[8596],"harrcir;":[10568],"harrw;":[8621],"hbar;":[8463],"hcirc;":[293],"hearts;":[9829],"heartsuit;":[9829],"hellip;":[8230],"hercon;":[8889],"hfr;":[55349,56613],"hksearow;":[10533],"hkswarow;":[10534],"hoarr;":[8703],"homtht;":[8763],"hookleftarrow;":[8617],"hookrightarrow;":[8618],"hopf;":[55349,56665],"horbar;":[8213],"hscr;":[55349,56509],"hslash;":[8463],"hstrok;":[295],"hybull;":[8259],"hyphen;":[8208],"iacute;":[237],"ic;":[8291],"icirc;":[238],"icy;":[1080],"iecy;":[1077],"iexcl;":[161],"iff;":[8660],"ifr;":[55349,56614],"igrave;":[236],"ii;":[8520],"iiiint;":[10764],"iiint;":[8749],"iinfin;":[10716],"iiota;":[8489],"ijlig;":[307],"imacr;":[299],"image;":[8465],"imagline;":[8464],"imagpart;":[8465],"imath;":[305],"imof;":[8887],"imped;":[437],"in;":[8712],"incare;":[8453],"infin;":[8734],"infintie;":[10717],"inodot;":[305],"int;":[8747],"intcal;":[8890],"integers;":[8484],"intercal;":[8890],"intlarhk;":[10775],"intprod;":[10812],"iocy;":[1105],"iogon;":[303],"iopf;":[55349,56666],"iota;":[953],"iprod;":[10812],"iquest;":[191],"iscr;":[55349,56510],"isin;":[8712],"isinE;":[8953],"isindot;":[8949],"isins;":[8948],"isinsv;":[8947],"isinv;":[8712],"it;":[8290],"itilde;":[297],"iukcy;":[1110],"iuml;":[239],"jcirc;":[309],"jcy;":[1081],"jfr;":[55349,56615],"jmath;":[567],"jopf;":[55349,56667],"jscr;":[55349,56511],"jsercy;":[1112],"jukcy;":[1108],"kappa;":[954],"kappav;":[1008],"kcedil;":[311],"kcy;":[1082],"kfr;":[55349,56616],"kgreen;":[312],"khcy;":[1093],"kjcy;":[1116],"kopf;":[55349,56668],"kscr;":[55349,56512],"lAarr;":[8666],"lArr;":[8656],"lAtail;":[10523],"lBarr;":[10510],"lE;":[8806],"lEg;":[10891],"lHar;":[10594],"lacute;":[314],"laemptyv;":[10676],"lagran;":[8466],"lambda;":[955],"lang;":[10216],"langd;":[10641],"langle;":[10216],"lap;":[10885],"laquo;":[171],"larr;":[8592],"larrb;":[8676],"larrbfs;":[10527],"larrfs;":[10525],"larrhk;":[8617],"larrlp;":[8619],"larrpl;":[10553],"larrsim;":[10611],"larrtl;":[8610],"lat;":[10923],"latail;":[10521],"late;":[10925],"lates;":[10925,65024],"lbarr;":[10508],"lbbrk;":[10098],"lbrace;":[123],"lbrack;":[91],"lbrke;":[10635],"lbrksld;":[10639],"lbrkslu;":[10637],"lcaron;":[318],"lcedil;":[316],"lceil;":[8968],"lcub;":[123],"lcy;":[1083],"ldca;":[10550],"ldquo;":[8220],"ldquor;":[8222],"ldrdhar;":[10599],"ldrushar;":[10571],"ldsh;":[8626],"le;":[8804],"leftarrow;":[8592],"leftarrowtail;":[8610],"leftharpoondown;":[8637],"leftharpoonup;":[8636],"leftleftarrows;":[8647],"leftrightarrow;":[8596],"leftrightarrows;":[8646],"leftrightharpoons;":[8651],"leftrightsquigarrow;":[8621],"leftthreetimes;":[8907],"leg;":[8922],"leq;":[8804],"leqq;":[8806],"leqslant;":[10877],"les;":[10877],"lescc;":[10920],"lesdot;":[10879],"lesdoto;":[10881],"lesdotor;":[10883],"lesg;":[8922,65024],"lesges;":[10899],"lessapprox;":[10885],"lessdot;":[8918],"lesseqgtr;":[8922],"lesseqqgtr;":[10891],"lessgtr;":[8822],"lesssim;":[8818],"lfisht;":[10620],"lfloor;":[8970],"lfr;":[55349,56617],"lg;":[8822],"lgE;":[10897],"lhard;":[8637],"lharu;":[8636],"lharul;":[10602],"lhblk;":[9604],"ljcy;":[1113],"ll;":[8810],"llarr;":[8647],"llcorner;":[8990],"llhard;":[10603],"lltri;":[9722],"lmidot;":[320],"lmoust;":[9136],"lmoustache;":[9136],"lnE;":[8808],"lnap;":[10889],"lnapprox;":[10889],"lne;":[10887],"lneq;":[10887],"lneqq;":[8808],"lnsim;":[8934],"loang;":[10220],"loarr;":[8701],"lobrk;":[10214],"longleftarrow;":[10229],"longleftrightarrow;":[10231],"longmapsto;":[10236],"longrightarrow;":[10230],"looparrowleft;":[8619],"looparrowright;":[8620],"lopar;":[10629],"lopf;":[55349,56669],"loplus;":[10797],"lotimes;":[10804],"lowast;":[8727],"lowbar;":[95],"loz;":[9674],"lozenge;":[9674],"lozf;":[10731],"lpar;":[40],"lparlt;":[10643],"lrarr;":[8646],"lrcorner;":[8991],"lrhar;":[8651],"lrhard;":[10605],"lrm;":[8206],"lrtri;":[8895],"lsaquo;":[8249],"lscr;":[55349,56513],"lsh;":[8624],"lsim;":[8818],"lsime;":[10893],"lsimg;":[10895],"lsqb;":[91],"lsquo;":[8216],"lsquor;":[8218],"lstrok;":[322],"lt;":[60],"ltcc;":[10918],"ltcir;":[10873],"ltdot;":[8918],"lthree;":[8907],"ltimes;":[8905],"ltlarr;":[10614],"ltquest;":[10875],"ltrPar;":[10646],"ltri;":[9667],"ltrie;":[8884],"ltrif;":[9666],"lurdshar;":[10570],"luruhar;":[10598],"lvertneqq;":[8808,65024],"lvnE;":[8808,65024],"mDDot;":[8762],"macr;":[175],"male;":[9794],"malt;":[10016],"maltese;":[10016],"map;":[8614],"mapsto;":[8614],"mapstodown;":[8615],"mapstoleft;":[8612],"mapstoup;":[8613],"marker;":[9646],"mcomma;":[10793],"mcy;":[1084],"mdash;":[8212],"measuredangle;":[8737],"mfr;":[55349,56618],"mho;":[8487],"micro;":[181],"mid;":[8739],"midast;":[42],"midcir;":[10992],"middot;":[183],"minus;":[8722],"minusb;":[8863],"minusd;":[8760],"minusdu;":[10794],"mlcp;":[10971],"mldr;":[8230],"mnplus;":[8723],"models;":[8871],"mopf;":[55349,56670],"mp;":[8723],"mscr;":[55349,56514],"mstpos;":[8766],"mu;":[956],"multimap;":[8888],"mumap;":[8888],"nGg;":[8921,824],"nGt;":[8811,8402],"nGtv;":[8811,824],"nLeftarrow;":[8653],"nLeftrightarrow;":[8654],"nLl;":[8920,824],"nLt;":[8810,8402],"nLtv;":[8810,824],"nRightarrow;":[8655],"nVDash;":[8879],"nVdash;":[8878],"nabla;":[8711],"nacute;":[324],"nang;":[8736,8402],"nap;":[8777],"napE;":[10864,824],"napid;":[8779,824],"napos;":[329],"napprox;":[8777],"natur;":[9838],"natural;":[9838],"naturals;":[8469],"nbsp;":[160],"nbump;":[8782,824],"nbumpe;":[8783,824],"ncap;":[10819],"ncaron;":[328],"ncedil;":[326],"ncong;":[8775],"ncongdot;":[10861,824],"ncup;":[10818],"ncy;":[1085],"ndash;":[8211],"ne;":[8800],"neArr;":[8663],"nearhk;":[10532],"nearr;":[8599],"nearrow;":[8599],"nedot;":[8784,824],"nequiv;":[8802],"nesear;":[10536],"nesim;":[8770,824],"nexist;":[8708],"nexists;":[8708],"nfr;":[55349,56619],"ngE;":[8807,824],"nge;":[8817],"ngeq;":[8817],"ngeqq;":[8807,824],"ngeqslant;":[10878,824],"nges;":[10878,824],"ngsim;":[8821],"ngt;":[8815],"ngtr;":[8815],"nhArr;":[8654],"nharr;":[8622],"nhpar;":[10994],"ni;":[8715],"nis;":[8956],"nisd;":[8954],"niv;":[8715],"njcy;":[1114],"nlArr;":[8653],"nlE;":[8806,824],"nlarr;":[8602],"nldr;":[8229],"nle;":[8816],"nleftarrow;":[8602],"nleftrightarrow;":[8622],"nleq;":[8816],"nleqq;":[8806,824],"nleqslant;":[10877,824],"nles;":[10877,824],"nless;":[8814],"nlsim;":[8820],"nlt;":[8814],"nltri;":[8938],"nltrie;":[8940],"nmid;":[8740],"nopf;":[55349,56671],"not;":[172],"notin;":[8713],"notinE;":[8953,824],"notindot;":[8949,824],"notinva;":[8713],"notinvb;":[8951],"notinvc;":[8950],"notni;":[8716],"notniva;":[8716],"notnivb;":[8958],"notnivc;":[8957],"npar;":[8742],"nparallel;":[8742],"nparsl;":[11005,8421],"npart;":[8706,824],"npolint;":[10772],"npr;":[8832],"nprcue;":[8928],"npre;":[10927,824],"nprec;":[8832],"npreceq;":[10927,824],"nrArr;":[8655],"nrarr;":[8603],"nrarrc;":[10547,824],"nrarrw;":[8605,824],"nrightarrow;":[8603],"nrtri;":[8939],"nrtrie;":[8941],"nsc;":[8833],"nsccue;":[8929],"nsce;":[10928,824],"nscr;":[55349,56515],"nshortmid;":[8740],"nshortparallel;":[8742],"nsim;":[8769],"nsime;":[8772],"nsimeq;":[8772],"nsmid;":[8740],"nspar;":[8742],"nsqsube;":[8930],"nsqsupe;":[8931],"nsub;":[8836],"nsubE;":[10949,824],"nsube;":[8840],"nsubset;":[8834,8402],"nsubseteq;":[8840],"nsubseteqq;":[10949,824],"nsucc;":[8833],"nsucceq;":[10928,824],"nsup;":[8837],"nsupE;":[10950,824],"nsupe;":[8841],"nsupset;":[8835,8402],"nsupseteq;":[8841],"nsupseteqq;":[10950,824],"ntgl;":[8825],"ntilde;":[241],"ntlg;":[8824],"ntriangleleft;":[8938],"ntrianglelefteq;":[8940],"ntriangleright;":[8939],"ntrianglerighteq;":[8941],"nu;":[957],"num;":[35],"numero;":[8470],"numsp;":[8199],"nvDash;":[8877],"nvHarr;":[10500],"nvap;":[8781,8402],"nvdash;":[8876],"nvge;":[8805,8402],"nvgt;":[62,8402],"nvinfin;":[10718],"nvlArr;":[10498],"nvle;":[8804,8402],"nvlt;":[60,8402],"nvltrie;":[8884,8402],"nvrArr;":[10499],"nvrtrie;":[8885,8402],"nvsim;":[8764,8402],"nwArr;":[8662],"nwarhk;":[10531],"nwarr;":[8598],"nwarrow;":[8598],"nwnear;":[10535],"oS;":[9416],"oacute;":[243],"oast;":[8859],"ocir;":[8858],"ocirc;":[244],"ocy;":[1086],"odash;":[8861],"odblac;":[337],"odiv;":[10808],"odot;":[8857],"odsold;":[10684],"oelig;":[339],"ofcir;":[10687],"ofr;":[55349,56620],"ogon;":[731],"ograve;":[242],"ogt;":[10689],"ohbar;":[10677],"ohm;":[937],"oint;":[8750],"olarr;":[8634],"olcir;":[10686],"olcross;":[10683],"oline;":[8254],"olt;":[10688],"omacr;":[333],"omega;":[969],"omicron;":[959],"omid;":[10678],"ominus;":[8854],"oopf;":[55349,56672],"opar;":[10679],"operp;":[10681],"oplus;":[8853],"or;":[8744],"orarr;":[8635],"ord;":[10845],"order;":[8500],"orderof;":[8500],"ordf;":[170],"ordm;":[186],"origof;":[8886],"oror;":[10838],"orslope;":[10839],"orv;":[10843],"oscr;":[8500],"oslash;":[248],"osol;":[8856],"otilde;":[245],"otimes;":[8855],"otimesas;":[10806],"ouml;":[246],"ovbar;":[9021],"par;":[8741],"para;":[182],"parallel;":[8741],"parsim;":[10995],"parsl;":[11005],"part;":[8706],"pcy;":[1087],"percnt;":[37],"period;":[46],"permil;":[8240],"perp;":[8869],"pertenk;":[8241],"pfr;":[55349,56621],"phi;":[966],"phiv;":[981],"phmmat;":[8499],"phone;":[9742],"pi;":[960],"pitchfork;":[8916],"piv;":[982],"planck;":[8463],"planckh;":[8462],"plankv;":[8463],"plus;":[43],"plusacir;":[10787],"plusb;":[8862],"pluscir;":[10786],"plusdo;":[8724],"plusdu;":[10789],"pluse;":[10866],"plusmn;":[177],"plussim;":[10790],"plustwo;":[10791],"pm;":[177],"pointint;":[10773],"popf;":[55349,56673],"pound;":[163],"pr;":[8826],"prE;":[10931],"prap;":[10935],"prcue;":[8828],"pre;":[10927],"prec;":[8826],"precapprox;":[10935],"preccurlyeq;":[8828],"preceq;":[10927],"precnapprox;":[10937],"precneqq;":[10933],"precnsim;":[8936],"precsim;":[8830],"prime;":[8242],"primes;":[8473],"prnE;":[10933],"prnap;":[10937],"prnsim;":[8936],"prod;":[8719],"profalar;":[9006],"profline;":[8978],"profsurf;":[8979],"prop;":[8733],"propto;":[8733],"prsim;":[8830],"prurel;":[8880],"pscr;":[55349,56517],"psi;":[968],"puncsp;":[8200],"qfr;":[55349,56622],"qint;":[10764],"qopf;":[55349,56674],"qprime;":[8279],"qscr;":[55349,56518],"quaternions;":[8461],"quatint;":[10774],"quest;":[63],"questeq;":[8799],"quot;":[34],"rAarr;":[8667],"rArr;":[8658],"rAtail;":[10524],"rBarr;":[10511],"rHar;":[10596],"race;":[8765,817],"racute;":[341],"radic;":[8730],"raemptyv;":[10675],"rang;":[10217],"rangd;":[10642],"range;":[10661],"rangle;":[10217],"raquo;":[187],"rarr;":[8594],"rarrap;":[10613],"rarrb;":[8677],"rarrbfs;":[10528],"rarrc;":[10547],"rarrfs;":[10526],"rarrhk;":[8618],"rarrlp;":[8620],"rarrpl;":[10565],"rarrsim;":[10612],"rarrtl;":[8611],"rarrw;":[8605],"ratail;":[10522],"ratio;":[8758],"rationals;":[8474],"rbarr;":[10509],"rbbrk;":[10099],"rbrace;":[125],"rbrack;":[93],"rbrke;":[10636],"rbrksld;":[10638],"rbrkslu;":[10640],"rcaron;":[345],"rcedil;":[343],"rceil;":[8969],"rcub;":[125],"rcy;":[1088],"rdca;":[10551],"rdldhar;":[10601],"rdquo;":[8221],"rdquor;":[8221],"rdsh;":[8627],"real;":[8476],"realine;":[8475],"realpart;":[8476],"reals;":[8477],"rect;":[9645],"reg;":[174],"rfisht;":[10621],"rfloor;":[8971],"rfr;":[55349,56623],"rhard;":[8641],"rharu;":[8640],"rharul;":[10604],"rho;":[961],"rhov;":[1009],"rightarrow;":[8594],"rightarrowtail;":[8611],"rightharpoondown;":[8641],"rightharpoonup;":[8640],"rightleftarrows;":[8644],"rightleftharpoons;":[8652],"rightrightarrows;":[8649],"rightsquigarrow;":[8605],"rightthreetimes;":[8908],"ring;":[730],"risingdotseq;":[8787],"rlarr;":[8644],"rlhar;":[8652],"rlm;":[8207],"rmoust;":[9137],"rmoustache;":[9137],"rnmid;":[10990],"roang;":[10221],"roarr;":[8702],"robrk;":[10215],"ropar;":[10630],"ropf;":[55349,56675],"roplus;":[10798],"rotimes;":[10805],"rpar;":[41],"rpargt;":[10644],"rppolint;":[10770],"rrarr;":[8649],"rsaquo;":[8250],"rscr;":[55349,56519],"rsh;":[8625],"rsqb;":[93],"rsquo;":[8217],"rsquor;":[8217],"rthree;":[8908],"rtimes;":[8906],"rtri;":[9657],"rtrie;":[8885],"rtrif;":[9656],"rtriltri;":[10702],"ruluhar;":[10600],"rx;":[8478],"sacute;":[347],"sbquo;":[8218],"sc;":[8827],"scE;":[10932],"scap;":[10936],"scaron;":[353],"sccue;":[8829],"sce;":[10928],"scedil;":[351],"scirc;":[349],"scnE;":[10934],"scnap;":[10938],"scnsim;":[8937],"scpolint;":[10771],"scsim;":[8831],"scy;":[1089],"sdot;":[8901],"sdotb;":[8865],"sdote;":[10854],"seArr;":[8664],"searhk;":[10533],"searr;":[8600],"searrow;":[8600],"sect;":[167],"semi;":[59],"seswar;":[10537],"setminus;":[8726],"setmn;":[8726],"sext;":[10038],"sfr;":[55349,56624],"sfrown;":[8994],"sharp;":[9839],"shchcy;":[1097],"shcy;":[1096],"shortmid;":[8739],"shortparallel;":[8741],"shy;":[173],"sigma;":[963],"sigmaf;":[962],"sigmav;":[962],"sim;":[8764],"simdot;":[10858],"sime;":[8771],"simeq;":[8771],"simg;":[10910],"simgE;":[10912],"siml;":[10909],"simlE;":[10911],"simne;":[8774],"simplus;":[10788],"simrarr;":[10610],"slarr;":[8592],"smallsetminus;":[8726],"smashp;":[10803],"smeparsl;":[10724],"smid;":[8739],"smile;":[8995],"smt;":[10922],"smte;":[10924],"smtes;":[10924,65024],"softcy;":[1100],"sol;":[47],"solb;":[10692],"solbar;":[9023],"sopf;":[55349,56676],"spades;":[9824],"spadesuit;":[9824],"spar;":[8741],"sqcap;":[8851],"sqcaps;":[8851,65024],"sqcup;":[8852],"sqcups;":[8852,65024],"sqsub;":[8847],"sqsube;":[8849],"sqsubset;":[8847],"sqsubseteq;":[8849],"sqsup;":[8848],"sqsupe;":[8850],"sqsupset;":[8848],"sqsupseteq;":[8850],"squ;":[9633],"square;":[9633],"squarf;":[9642],"squf;":[9642],"srarr;":[8594],"sscr;":[55349,56520],"ssetmn;":[8726],"ssmile;":[8995],"sstarf;":[8902],"star;":[9734],"starf;":[9733],"straightepsilon;":[1013],"straightphi;":[981],"strns;":[175],"sub;":[8834],"subE;":[10949],"subdot;":[10941],"sube;":[8838],"subedot;":[10947],"submult;":[10945],"subnE;":[10955],"subne;":[8842],"subplus;":[10943],"subrarr;":[10617],"subset;":[8834],"subseteq;":[8838],"subseteqq;":[10949],"subsetneq;":[8842],"subsetneqq;":[10955],"subsim;":[10951],"subsub;":[10965],"subsup;":[10963],"succ;":[8827],"succapprox;":[10936],"succcurlyeq;":[8829],"succeq;":[10928],"succnapprox;":[10938],"succneqq;":[10934],"succnsim;":[8937],"succsim;":[8831],"sum;":[8721],"sung;":[9834],"sup;":[8835],"sup1;":[185],"sup2;":[178],"sup3;":[179],"supE;":[10950],"supdot;":[10942],"supdsub;":[10968],"supe;":[8839],"supedot;":[10948],"suphsol;":[10185],"suphsub;":[10967],"suplarr;":[10619],"supmult;":[10946],"supnE;":[10956],"supne;":[8843],"supplus;":[10944],"supset;":[8835],"supseteq;":[8839],"supseteqq;":[10950],"supsetneq;":[8843],"supsetneqq;":[10956],"supsim;":[10952],"supsub;":[10964],"supsup;":[10966],"swArr;":[8665],"swarhk;":[10534],"swarr;":[8601],"swarrow;":[8601],"swnwar;":[10538],"szlig;":[223],"target;":[8982],"tau;":[964],"tbrk;":[9140],"tcaron;":[357],"tcedil;":[355],"tcy;":[1090],"tdot;":[8411],"telrec;":[8981],"tfr;":[55349,56625],"there4;":[8756],"therefore;":[8756],"theta;":[952],"thetasym;":[977],"thetav;":[977],"thickapprox;":[8776],"thicksim;":[8764],"thinsp;":[8201],"thkap;":[8776],"thksim;":[8764],"thorn;":[254],"tilde;":[732],"times;":[215],"timesb;":[8864],"timesbar;":[10801],"timesd;":[10800],"tint;":[8749],"toea;":[10536],"top;":[8868],"topbot;":[9014],"topcir;":[10993],"topf;":[55349,56677],"topfork;":[10970],"tosa;":[10537],"tprime;":[8244],"trade;":[8482],"triangle;":[9653],"triangledown;":[9663],"triangleleft;":[9667],"trianglelefteq;":[8884],"triangleq;":[8796],"triangleright;":[9657],"trianglerighteq;":[8885],"tridot;":[9708],"trie;":[8796],"triminus;":[10810],"triplus;":[10809],"trisb;":[10701],"tritime;":[10811],"trpezium;":[9186],"tscr;":[55349,56521],"tscy;":[1094],"tshcy;":[1115],"tstrok;":[359],"twixt;":[8812],"twoheadleftarrow;":[8606],"twoheadrightarrow;":[8608],"uArr;":[8657],"uHar;":[10595],"uacute;":[250],"uarr;":[8593],"ubrcy;":[1118],"ubreve;":[365],"ucirc;":[251],"ucy;":[1091],"udarr;":[8645],"udblac;":[369],"udhar;":[10606],"ufisht;":[10622],"ufr;":[55349,56626],"ugrave;":[249],"uharl;":[8639],"uharr;":[8638],"uhblk;":[9600],"ulcorn;":[8988],"ulcorner;":[8988],"ulcrop;":[8975],"ultri;":[9720],"umacr;":[363],"uml;":[168],"uogon;":[371],"uopf;":[55349,56678],"uparrow;":[8593],"updownarrow;":[8597],"upharpoonleft;":[8639],"upharpoonright;":[8638],"uplus;":[8846],"upsi;":[965],"upsih;":[978],"upsilon;":[965],"upuparrows;":[8648],"urcorn;":[8989],"urcorner;":[8989],"urcrop;":[8974],"uring;":[367],"urtri;":[9721],"uscr;":[55349,56522],"utdot;":[8944],"utilde;":[361],"utri;":[9653],"utrif;":[9652],"uuarr;":[8648],"uuml;":[252],"uwangle;":[10663],"vArr;":[8661],"vBar;":[10984],"vBarv;":[10985],"vDash;":[8872],"vangrt;":[10652],"varepsilon;":[1013],"varkappa;":[1008],"varnothing;":[8709],"varphi;":[981],"varpi;":[982],"varpropto;":[8733],"varr;":[8597],"varrho;":[1009],"varsigma;":[962],"varsubsetneq;":[8842,65024],"varsubsetneqq;":[10955,65024],"varsupsetneq;":[8843,65024],"varsupsetneqq;":[10956,65024],"vartheta;":[977],"vartriangleleft;":[8882],"vartriangleright;":[8883],"vcy;":[1074],"vdash;":[8866],"vee;":[8744],"veebar;":[8891],"veeeq;":[8794],"vellip;":[8942],"verbar;":[124],"vert;":[124],"vfr;":[55349,56627],"vltri;":[8882],"vnsub;":[8834,8402],"vnsup;":[8835,8402],"vopf;":[55349,56679],"vprop;":[8733],"vrtri;":[8883],"vscr;":[55349,56523],"vsubnE;":[10955,65024],"vsubne;":[8842,65024],"vsupnE;":[10956,65024],"vsupne;":[8843,65024],"vzigzag;":[10650],"wcirc;":[373],"wedbar;":[10847],"wedge;":[8743],"wedgeq;":[8793],"weierp;":[8472],"wfr;":[55349,56628],"wopf;":[55349,56680],"wp;":[8472],"wr;":[8768],"wreath;":[8768],"wscr;":[55349,56524],"xcap;":[8898],"xcirc;":[9711],"xcup;":[8899],"xdtri;":[9661],"xfr;":[55349,56629],"xhArr;":[10234],"xharr;":[10231],"xi;":[958],"xlArr;":[10232],"xlarr;":[10229],"xmap;":[10236],"xnis;":[8955],"xodot;":[10752],"xopf;":[55349,56681],"xoplus;":[10753],"xotime;":[10754],"xrArr;":[10233],"xrarr;":[10230],"xscr;":[55349,56525],"xsqcup;":[10758],"xuplus;":[10756],"xutri;":[9651],"xvee;":[8897],"xwedge;":[8896],"yacute;":[253],"yacy;":[1103],"ycirc;":[375],"ycy;":[1099],"yen;":[165],"yfr;":[55349,56630],"yicy;":[1111],"yopf;":[55349,56682],"yscr;":[55349,56526],"yucy;":[1102],"yuml;":[255],"zacute;":[378],"zcaron;":[382],"zcy;":[1079],"zdot;":[380],"zeetrf;":[8488],"zeta;":[950],"zfr;":[55349,56631],"zhcy;":[1078],"zigrarr;":[8669],"zopf;":[55349,56683],"zscr;":[55349,56527],"zwj;":[8205],"zwnj;":[8204],"AElig":[198],"AMP":[38],"Aacute":[193],"Acirc":[194],"Agrave":[192],"Aring":[197],"Atilde":[195],"Auml":[196],"COPY":[169],"Ccedil":[199],"ETH":[208],"Eacute":[201],"Ecirc":[202],"Egrave":[200],"Euml":[203],"GT":[62],"Iacute":[205],"Icirc":[206],"Igrave":[204],"Iuml":[207],"LT":[60],"Ntilde":[209],"Oacute":[211],"Ocirc":[212],"Ograve":[210],"Oslash":[216],"Otilde":[213],"Ouml":[214],"QUOT":[34],"REG":[174],"THORN":[222],"Uacute":[218],"Ucirc":[219],"Ugrave":[217],"Uuml":[220],"Yacute":[221],"aacute":[225],"acirc":[226],"acute":[180],"aelig":[230],"agrave":[224],"amp":[38],"aring":[229],"atilde":[227],"auml":[228],"brvbar":[166],"ccedil":[231],"cedil":[184],"cent":[162],"copy":[169],"curren":[164],"deg":[176],"divide":[247],"eacute":[233],"ecirc":[234],"egrave":[232],"eth":[240],"euml":[235],"frac12":[189],"frac14":[188],"frac34":[190],"gt":[62],"iacute":[237],"icirc":[238],"iexcl":[161],"igrave":[236],"iquest":[191],"iuml":[239],"laquo":[171],"lt":[60],"macr":[175],"micro":[181],"middot":[183],"nbsp":[160],"not":[172],"ntilde":[241],"oacute":[243],"ocirc":[244],"ograve":[242],"ordf":[170],"ordm":[186],"oslash":[248],"otilde":[245],"ouml":[246],"para":[182],"plusmn":[177],"pound":[163],"quot":[34],"raquo":[187],"reg":[174],"sect":[167],"shy":[173],"sup1":[185],"sup2":[178],"sup3":[179],"szlig":[223],"thorn":[254],"times":[215],"uacute":[250],"ucirc":[251],"ugrave":[249],"uml":[168],"uuml":[252],"yacute":[253],"yen":[165],"yuml":[255]};

  var common = require("./common.js");
  var characters = common.characters;
  var namespace = common.namespace;
  var tokenType = common.tokenType;
  var invalidCharacters = common.invalidCharacters;

  var characterReferenceTable = {
    0x00:0xFFFD, 0x80:0x20AC, 0x82:0x201A, 0x83:0x0192, 0x84:0x201E,
    0x85:0x2026, 0x86:0x2020, 0x87:0x2021, 0x88:0x02C6, 0x89:0x2030,
    0x8A:0x0160, 0x8B:0x2039, 0x8C:0x0152, 0x8E:0x017D, 0x91:0x2018,
    0x92:0x2019, 0x93:0x201C, 0x94:0x201D, 0x95:0x2022, 0x96:0x2013,
    0x97:0x2014, 0x98:0x02DC, 0x99:0x2122, 0x9A:0x0161, 0x9B:0x203A,
    0x9C:0x0153, 0x9E:0x017E, 0x9F:0x0178
  };


  var alphanumericASCII = /[A-Z0-9]/i;
  var attributeCharacterReference = /^#[0-9]+$|^#[xX][0-9a-fA-F]+$|^[a-zA-Z][a-zA-Z0-9]*$/;

  function characterCode(str) {
    return str.charCodeAt(0);
  }

  function invalidUnicode(str) {
    return (str >= 0xD800 && str <= 0xDFFF) || str > 0x10FFFF;
  }

  function Tokenizer(options, parser) {
    this.state = options.initialState || this.states.data;
    this.parser = parser;
    this.revertState = null;
    this._tagName = null;
    this.endTag = null;
    this.selfClosing = null;
    this.attributes = null;
    this.attrName = null;
    this.attrValue = null;
    this.tempBuffer = null;
    this.position = 0;
    this.isEOF = false;
    this.forceQuirks = false;
    this.doctypeName = null;
    this.commentData = null;
    this.tokens = [];
    this.lastStartTag = options.lastStartTag || null;
    this.additionalAllowedCharacter = null;
    this.doctypePublidId = null;
    this.doctypeSystemId = null;
  }

  Tokenizer.prototype.parse = function(input) {
    if (this.isEOF) {
      return false;
    }

    this.tokens = [];
    switch(this.state) {
      case this.states.data:
        this.data_state(this.consumeCharacter(input), input);
        break;
      case this.states.character_reference_in_data:
        this.setState(this.states.data);
        this.additionalAllowedCharacter = null;
        var tmp = this.consumeCharacterReference(input, false);
        if (!tmp) {
          this.emitToken(characters.AMPERSAND);
        } else {
          this.emitTokens(tmp);
        }

        /*
         Attempt to consume a character reference, with no additional allowed character.
         If nothing is returned, emit a U+0026 AMPERSAND character (&) token.
         Otherwise, emit the character tokens that were returned.
         */
        break;
      case this.states.RCDATA:
        this.rcdata(this.consumeCharacter(input));
        break;
      case this.states.character_reference_in_RCDATA:
        this.character_reference_in_RCDATA(input);
        break;
      case this.states.rawtext:
        this.rawtext(this.consumeCharacter(input));
        break;
      case this.states.script_data:
        this.script_data(this.consumeCharacter(input));
        break;
      case this.states.plaintext:
        this.plaintext(this.consumeCharacter(input));
        break;
      case this.states.tag_open:
        this.tag_open(this.consumeCharacter(input));
        break;
      case this.states.end_tag_open:
        this.end_tag_open(this.consumeCharacter(input));
        break;
      case this.states.tag_name:
        this.tag_name(this.consumeCharacter(input));
        break;
      case this.states.RCDATA_less_than_sign:
        this.rcdata_less_than_sign(this.consumeCharacter(input));
        break;
      case this.states.RCDATA_end_tag_open:
        this.rcdata_end_tag_open(this.consumeCharacter(input));
        break;
      case this.states.RCDATA_end_tag_name:
        this.rcdata_end_tag_name(this.consumeCharacter(input));
        break;
      case this.states.rawtext_lessthan_sign:
        this.rawtext_less_than_sign(this.consumeCharacter(input));
        break;
      case this.states.rawtext_end_tag_open:
        this.rawtext_end_tag_open(this.consumeCharacter(input));
        break;
      case this.states.rawtext_end_tag_name:
        this.rawtext_end_tag_name(this.consumeCharacter(input));
        break;
      case this.states.script_data_lessthan_sign:
        this.script_data_lessthan_sign(this.consumeCharacter(input));
        break;
      case this.states.script_data_end_tag_open:
        this.script_data_end_tag_open(this.consumeCharacter(input));
        break;
      case this.states.script_data_end_tag_name:
        this.script_data_end_tag_name(this.consumeCharacter(input));
        break;
      case this.states.script_data_escape_start:
        this.script_data_escape_start(this.consumeCharacter(input));
        break;
      case this.states.script_data_escape_start_dash:
        this.script_data_escape_start_dash(this.consumeCharacter(input));
        break;
      case this.states.script_data_escaped:
        this.script_data_escaped(this.consumeCharacter(input));
        break;
      case this.states.script_data_escaped_dash:
        this.script_data_escaped_dash(this.consumeCharacter(input));
        break;
      case this.states.script_data_escaped_dash_dash:
        this.script_data_escaped_dash_dash(this.consumeCharacter(input));
        break;
      case this.states.script_data_escaped_lessthan_sign:
        this.script_data_escaped_lessthan_sign(this.consumeCharacter(input));
        break;
      case this.states.script_data_escaped_end_tag_open:
        this.script_data_escaped_end_tag_open(this.consumeCharacter(input));
        break;
      case this.states.script_data_escaped_end_tag_name:
        this.script_data_escaped_end_tag_name(this.consumeCharacter(input));
        break;
      case this.states.script_data_double_escape_start:
        this.script_data_double_escape_start(this.consumeCharacter(input));
        break;
      case this.states.script_data_double_escaped:
        this.script_data_double_escaped(this.consumeCharacter(input));
        break;
      case this.states.script_data_double_escaped_dash:
        this.script_data_double_escaped_dash(this.consumeCharacter(input));
        break;
      case this.states.script_data_double_escaped_dash_dash:
        this.script_data_double_escaped_dash_dash(this.consumeCharacter(input));
        break;
      case this.states.script_data_double_escaped_lessthan_sign:
        this.script_data_double_escaped_lessthan_sign(this.consumeCharacter(input));
        break;
      case this.states.script_data_double_escape_end:
        this.script_data_double_escape_end(this.consumeCharacter(input));
        break;
      case this.states.before_attribute_name:
        this.before_attribute_name(this.consumeCharacter(input));
        break;
      case this.states.attribute_name:
        this.attribute_name(this.consumeCharacter(input));
        break;
      case this.states.after_attribute_name:
        this.after_attribute_name(this.consumeCharacter(input));
        break;
      case this.states.before_attribute_value:
        this.before_attribute_value(this.consumeCharacter(input));
        break;
      case this.states.attribute_value_double_quoted:
        this.attribute_value_double_quoted(this.consumeCharacter(input));
        break;
      case this.states.attribute_value_single_quoted:
        this.attribute_value_single_quoted(this.consumeCharacter(input));
        break;
      case this.states.attribute_value_unquoted:
        this.attribute_value_unquoted(this.consumeCharacter(input));
        break;
      case this.states.character_reference_in_attribute_value:
        this.character_reference_in_attribute_value(input);
        break;
      case this.states.after_attribute_value_quoted:
        this.after_attribute_value_quoted(this.consumeCharacter(input));
        break;
      case this.states.self_closing_start_tag:
        this.self_closing_start_tag(this.consumeCharacter(input));
        break;
      case this.states.bogus_comment:
        this.bogus_comment(input);
        break;
      case this.states.markup_declaration_open:
        this.markup_declaration_open(input);
        break;
      case this.states.comment_start:
        this.comment_start(this.consumeCharacter(input));
        break;
      case this.states.comment_start_dash:
        this.comment_start_dash(this.consumeCharacter(input));
        break;
      case this.states.comment:
        this.comment(this.consumeCharacter(input));
        break;
      case this.states.comment_end_dash:
        this.comment_end_dash(this.consumeCharacter(input));
        break;
      case this.states.comment_end:
        this.comment_end(this.consumeCharacter(input));
        break;
      case this.states.comment_end_bang:
        this.comment_end_bang(this.consumeCharacter(input));
        break;
      case this.states.doctype:
        this.doctype(this.consumeCharacter(input));
        break;
      case this.states.before_doctype_name:
        this.before_doctype_name(this.consumeCharacter(input));
        break;
      case this.states.doctype_name:
        this.doctype_name(this.consumeCharacter(input));
        break;
      case this.states.after_doctype_name:
        this.after_doctype_name(this.consumeCharacter(input), input);
        break;
      case this.states.after_doctype_public_keyword:
        this.after_doctype_public_keyword(this.consumeCharacter(input));
        break;
      case this.states.before_doctype_public_identifier:
        this.before_doctype_public_identifier(this.consumeCharacter(input));
        break;
      case this.states.doctype_public_identifier_double_quoted:
        this.doctype_public_identifier_double_quoted(this.consumeCharacter(input));
        break;
      case this.states.doctype_public_identifier_single_quoted:
        this.doctype_public_identifier_single_quoted(this.consumeCharacter(input));
        break;
      case this.states.after_doctype_public_identifier:
        this.after_doctype_public_identifier(this.consumeCharacter(input));
        break;
      case this.states.between_doctype_public_and_system_identifiers:
        this.between_doctype_public_and_system_identifiers(this.consumeCharacter(input));
        break;
      case this.states.after_doctype_system_keyword:
        this.after_doctype_system_keyword(this.consumeCharacter(input));
        break;
      case this.states.before_doctype_system_identifier:
        this.before_doctype_system_identifier(this.consumeCharacter(input));
        break;
      case this.states.doctype_system_identifier_double_quoted:
        this.doctype_system_identifier_double_quoted(this.consumeCharacter(input));
        break;
      case this.states.doctype_system_identifier_single_quoted:
        this.doctype_system_identifier_single_quoted(this.consumeCharacter(input));
        break;
      case this.states.after_doctype_system_identifier:
        this.after_doctype_system_identifier(this.consumeCharacter(input));
        break;
      case this.states.bogus_doctype:
        this.bogus_doctype(this.consumeCharacter(input));
        break;
      case this.states.CDATA_section:
        this.CDATA_section(input);
        break;
      default:
        console.log("Unknown state:", this.state);
    }


    if (this.tokens.length > 0) {
      return this.tokens;
    } else {
      return true;
    }
  };

  Tokenizer.prototype.setState = function(state) {
    this.state = state;
  };

  Tokenizer.prototype.consumeCharacter = function(input) {
    var chr = this.getCharacter(input);
    this.position++;
    return chr;
  };

  Tokenizer.prototype.getCharacter = function(input) {
    return input[this.position] ? input[this.position].charCodeAt(0) : -1;
  };

  Tokenizer.prototype.parseError = function() {
    this.tokens.push('ParseError');
  };

  Tokenizer.prototype.emitEOF = function() {
    this.isEOF = true;
  };

  Tokenizer.prototype.createTempBuffer = function() {
    this.tempBuffer = "";
  };

  Tokenizer.prototype.emitDocType = function() {
    this.tokens.push([tokenType.doctype, this.doctypeName, this.doctypePublidId, this.doctypeSystemId, !this.forceQuirks]);
  };

  Tokenizer.prototype.consumeCharacterReference = function(input, inAttribute) {
    var hex = null;
    var consumed = null;
    var consumedChars = [];
    var tmp = null;
    switch (this.getCharacter(input)) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
      case characters.LESSTHAN_SIGN:
      case characters.AMPERSAND:
      case characters.EOF:
      case this.additionalAllowedCharacter:
        return null;
      case characters.NUMBER_SIGN:
        this.position++;
        switch(this.getCharacter(input)) {
          case 0x0078: // LATIN SMALL LETTER X
          case 0x0058: // LATIN CAPITAL LETTER X
            this.position++;
            hex = true;
            break;
          default:
            hex = false;
            break;
        }

        while(((consumed = this.consumeCharacter(input)) >= 0x0030 && consumed <= 0x0039) || (hex && ((consumed >= 0x041 && consumed <= 0x046) || (consumed >= 0x061 && consumed <= 0x066)))) {
          consumedChars.push(consumed);
        }

        if (consumedChars.length === 0) {
          this.parseError();
          this.position -= (hex) ? 3 : 2;
          return null;
        }

        if (consumed !== characters.SEMICOLON) {
          this.parseError();
          this.position--;
        }

        var str = String.fromCharCode.apply(String, consumedChars);
        str = hex ? parseInt(str, 16) : parseInt(str, 10);
        if (characterReferenceTable[str]) {
          this.parseError();
          return [characterReferenceTable[str]];
        }

        if (invalidUnicode(str)) {
          this.parseError();
          return [characters.REPLACEMENT_CHARACTER];
        }

        if (invalidCharacters(str) || str === 0x000D) {
          this.parseError();
        }
        /*
         Additionally, if the number is in the range 0x0001 to 0x0008, 0x000E to 0x001F, 0x007F to 0x009F, 0xFDD0 to 0xFDEF, or is one of
         0x000B, 0xFFFE, 0xFFFF, 0x1FFFE, 0x1FFFF, 0x2FFFE, 0x2FFFF, 0x3FFFE, 0x3FFFF, 0x4FFFE, 0x4FFFF, 0x5FFFE, 0x5FFFF, 0x6FFFE, 0x6FFFF, 0x7FFFE,
         0x7FFFF, 0x8FFFE, 0x8FFFF, 0x9FFFE, 0x9FFFF, 0xAFFFE, 0xAFFFF, 0xBFFFE, 0xBFFFF, 0xCFFFE, 0xCFFFF, 0xDFFFE, 0xDFFFF, 0xEFFFE, 0xEFFFF, 0xFFFFE,
         0xFFFFF, 0x10FFFE, or 0x10FFFF, then this is a parse error.
         */
        if (str <= 0xFFFF) {
          return [str];
        }

        str = str - 0x10000;
        return [0xD800 + (str >> 10), 0xDC00 + (str & 0x3FF)];
      default:
        consumed = "";
        var found = [];
        var stillValid = Object.keys(namedCharacters);
        var i = 0;
        var c = 0;
        var referenceLength = 0;

        var findValid = function(name) {
          if (attributeCharacterReference.test(consumed) && inAttribute) {
            found = [];
          }

          if (name === consumed) {
            referenceLength = name.length;
            found.push(namedCharacters[name]);
          }

          return name.substring(0, consumed.length) === consumed;
        };

        do {
          tmp = input[this.position + i++];
          if (tmp === undefined) {
            break;
          }
          consumed += tmp;
          stillValid = stillValid.filter(findValid);
        } while(stillValid.length);

        if (found.length === 0) {
          while(alphanumericASCII.test(input[this.position + c++]) && input[this.position+c]) {}
          if ((input[this.position + c] !== String.fromCharCode(characters.SEMICOLON)) || c === 1) {
            this.parseError();
          }
          return null;
        }

        if (inAttribute && (input[this.position + referenceLength-1] !== String.fromCharCode(characters.SEMICOLON)) && (input[this.position + referenceLength] === String.fromCharCode(characters.EQUALS_SIGN) || alphanumericASCII.test(input[this.position + referenceLength]))) {
          return null;
        }

        this.position += referenceLength;

        if (input[this.position - 1] !== String.fromCharCode(characters.SEMICOLON)) {
          this.parseError();
        }

        return found[found.length -1];
    }
  };

  Tokenizer.prototype.createComment = function() {
    this.commentData = "";
  };

  Tokenizer.prototype.emitComment = function() {
    this.tokens.push(['Comment', this.commentData]);
  };

  Tokenizer.prototype.createDoctype = function() {
    this.doctypeName = "";
  };

  Tokenizer.prototype.createStartTagToken = function() {
    this._tagName = "";
    this.endTag = false;
    this.selfClosing = null;
    this.attributes = {};
  };

  Tokenizer.prototype.createEndTagToken = function() {
    this._tagName = "";
    this.endTag = true;
  };

  Tokenizer.prototype.createAttribute = function() {
    this.addAttribute();
    this.attrName = "";
  };

  Tokenizer.prototype.addAttribute = function() {
    if (this.attrName && this.attrName.length) {
      if (!this.attributes || this.attributes[this.attrName] !== undefined || this.endTag) {
        this.parseError();
      } else {
        this.attributes[this.attrName] = this.attrValue;
      }
    }
    this.attrName = "";
    this.attrValue = "";
  };

  Tokenizer.prototype.emitTag = function() {
    this.addAttribute();
    if (!this.endTag) {
      this.lastStartTag = this._tagName;
      if (this.selfClosing) {
        this.tokens.push([tokenType.startTag, this._tagName, this.attributes, true]);
      } else {
        this.tokens.push([tokenType.startTag, this._tagName, this.attributes]);
      }
    } else {
      if (this.selfClosing) {
        this.parseError();
      }
      this.tokens.push([tokenType.endTag, this._tagName]);
    }
  };

  Tokenizer.prototype.emitToken = function(chr) {
    this.tokens.push(['Character', String.fromCharCode(chr)]);
  };

  Tokenizer.prototype.emitTokens = function(chrs) {
    this.tokens.push(['Character', String.fromCharCode.apply(String, chrs)]);
  };

  Tokenizer.prototype.appropriateEndTagToken = function() {
    return (this.lastStartTag === this._tagName);
  };


  Tokenizer.prototype.isSurrogatePair = function(input, pos) {
    if (!input[pos + 1]) {
      return false;
    }
    var code = input[pos].charCodeAt(0),
      next = input[pos + 1].charCodeAt(0);

    return (0xD800 <= code && code <= 0xDBFF && 0xDC00 <= next && next <= 0xDFFF);
  };


  Tokenizer.prototype.data_state = function(character, input) {
    switch(character) {
      case characters.AMPERSAND:
        this.setState(this.states.character_reference_in_data);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.tag_open);
        break;
      case characters.NULL:
        this.parseError();
        this.emitToken(character);
        break;
      case characters.EOF:
        this.emitEOF();
        break;
      default:
        if (invalidUnicode(this.codePointAt(input, this.position - 1))) {
          this.parseError();
          this.emitToken(characters.REPLACEMENT_CHARACTER);

          if (this.isSurrogatePair(input, this.position - 1)) {
            this.position++;
          }
        } else if (this.isSurrogatePair(input, this.position - 1)) {
          this.emitToken(character);
          this.emitToken(this.consumeCharacter(input));
        } else {
          if (input[this.position] && invalidUnicode(this.codePointAt(input, this.position))) {
            this.parseError();
            this.emitToken(character);
            this.emitToken(characters.REPLACEMENT_CHARACTER);
            this.position++;
          } else {
            this.emitToken(character);
          }
        }
    }
  };

  Tokenizer.prototype.rcdata = function(character) {
    switch(character) {
      case characters.AMPERSAND:
        this.setState(this.states.character_reference_in_RCDATA);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.RCDATA_less_than_sign);
        break;
      case characters.NULL:
        this.parseError();
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.emitEOF();
        break;
      default:
        this.emitToken(character);
    }
  };

  Tokenizer.prototype.character_reference_in_RCDATA = function(input) {
    this.setState(this.states.RCDATA);
    this.additionalAllowedCharacter = null;
    var tmp = this.consumeCharacterReference(input, false);
    if (!tmp) {
      this.emitToken(characters.AMPERSAND);
    } else {
      this.emitTokens(tmp);
    }
  };

  Tokenizer.prototype.rawtext = function(character) {
    switch(character) {
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.rawtext_lessthan_sign);
        break;
      case characters.NULL:
        this.parseError();
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.emitEOF();
        break;
      default:
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data = function(character) {
    switch(character) {
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_lessthan_sign);
        break;
      case characters.NULL:
        this.parseError();
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.emitEOF();
        break;
      default:
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.plaintext = function(character) {
    switch(character) {
      case characters.NULL:
        this.parseError();
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.emitEOF();
        break;
      default:
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.tag_open = function(character) {
    switch(character) {
      case characters.EXCLAMATION_MARK:
        this.setState(this.states.markup_declaration_open);
        break;
      case characters.SOLIDUS:
        this.setState(this.states.end_tag_open);
        break;
      case 0x0041:  //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      character += 0x0020;
      /*falls through*/
      case 0x0061:  //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.createStartTagToken();
      this._tagName = String.fromCharCode(character);
      this.setState(this.states.tag_name);
      break;
      case characters.QUESTION_MARK:
        this.parseError();
        this.setState(this.states.bogus_comment);
        break;
      default:
        this.parseError();
        this.setState(this.states.data);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.end_tag_open = function(character) {
    switch(character) {
      case 0x0041: // [A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      character += 0x0020;
      /*falls through*/
      case 0x0061:  //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.createEndTagToken();
      this._tagName += String.fromCharCode(character);
      this.setState(this.states.tag_name);
      break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.setState(this.states.data);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.emitToken(characters.SOLIDUS);
        this.position--;
        break;
      default:
        this.parseError();
        this.setState(this.states.bogus_comment);
        break;
    }
  };

  Tokenizer.prototype.tag_name = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.before_attribute_name);
        break;
      case characters.SOLIDUS:
        this.setState(this.states.self_closing_start_tag);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitTag();
        break;
      case 0x0041: // [A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this._tagName += String.fromCharCode(character + 0x0020);
      break;
      case characters.NULL:
        this.parseError();
        this._tagName += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this._tagName += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.rcdata_less_than_sign = function(character) {
    switch(character) {
      case characters.SOLIDUS:
        this.createTempBuffer();
        this.setState(this.states.RCDATA_end_tag_open);
        break;
      default:
        this.setState(this.states.RCDATA);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.end_tag_open_general = function(character, end_tagName, defaultState) {
    var tmp = character;
    switch(character) {
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      tmp += 0x0020;
      /*falls through*/
      case 0x0061: //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.createEndTagToken();
      this._tagName = String.fromCharCode(tmp);
      this.tempBuffer += String.fromCharCode(character);
      this.setState(end_tagName);
      break;
      default:
        this.setState(defaultState);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.emitToken(characters.SOLIDUS);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.rcdata_end_tag_open = function(character) {
    this.end_tag_open_general(character, this.states.RCDATA_end_tag_name, this.states.RCDATA);
  };

  Tokenizer.prototype.end_tag_name = function(character, defaultState) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        if (this.appropriateEndTagToken()) {
          this.setState(this.states.before_attribute_name);
          return;
        }
        break;
      case characters.SOLIDUS:
        if (this.appropriateEndTagToken()) {
          this.setState(this.states.self_closing_start_tag);
          return;
        }
        break;
      case characters.GREATERTHAN_SIGN:
        if (this.appropriateEndTagToken()) {
          this.setState(this.states.data);
          this.emitTag();
          return;
        }
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this._tagName += String.fromCharCode(character + 0x0020);
      this.tempBuffer += String.fromCharCode(character);
      return;
      case 0x0061: //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this._tagName += String.fromCharCode(character);
      this.tempBuffer += String.fromCharCode(character);
      return;
    }

    this.setState(defaultState);
    this.emitToken(characters.LESSTHAN_SIGN);
    this.emitToken(characters.SOLIDUS);
    this.tempBuffer.split("").map(characterCode).forEach(this.emitToken.bind(this));
    this.position--;
  };

  Tokenizer.prototype.rcdata_end_tag_name = function(character) {
    this.end_tag_name(character, this.states.RCDATA);
  };

  Tokenizer.prototype.rawtext_less_than_sign = function(character) {
    switch(character) {
      case characters.SOLIDUS:
        this.tempBuffer = "";
        this.setState(this.states.rawtext_end_tag_open);
        break;
      default:
        this.setState(this.states.rawtext);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.rawtext_end_tag_open = function(character) {
    this.end_tag_open_general(character, this.states.rawtext_end_tag_name, this.states.rawtext);
  };

  Tokenizer.prototype.rawtext_end_tag_name = function(character) {
    this.end_tag_name(character, this.states.rawtext);
  };

  Tokenizer.prototype.script_data_lessthan_sign = function(character) {
    switch(character) {
      case characters.SOLIDUS:
        this.tempBuffer = "";
        this.setState(this.states.script_data_end_tag_open);
        break;
      case characters.EXCLAMATION_MARK:
        this.setState(this.states.script_data_escape_start);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.emitToken(characters.EXCLAMATION_MARK);
        break;
      default:
        this.setState(this.states.script_data);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_end_tag_open = function(character) {
    this.end_tag_open_general(character, this.states.script_data_end_tag_name, this.states.script_data);
  };

  Tokenizer.prototype.script_data_end_tag_name = function(character) {
    this.end_tag_name(character, this.states.script_data);
  };

  Tokenizer.prototype.script_data_escape_start = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.script_data_escape_start_dash);
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      default:
        this.setState(this.states.script_data);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_escape_start_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.script_data_escaped_dash_dash);
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      default:
        this.setState(this.states.script_data);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_escaped_dash_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_escaped_lessthan_sign);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.script_data);
        this.emitToken(characters.GREATERTHAN_SIGN);
        break;
      case characters.NULL:
        this.parseError();
        this.setState(this.states.script_data_escaped);
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.setState(this.states.script_data_escaped);
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data_escaped = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.script_data_escaped_dash_dash);
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_escaped_lessthan_sign);
        break;
      case characters.NULL:
        this.parseError();
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.setState(this.states.data);
        this.parseError();
        this.position--;
        break;
      default:
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data_escaped_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.script_data_escaped_dash_dash);
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_escaped_lessthan_sign);
        break;
      case characters.NULL:
        this.parseError();
        this.setState(this.states.script_data_escaped);
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.setState(this.states.script_data_escaped);
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data_escaped_lessthan_sign = function(character) {
    var tmp = character;
    switch(character) {
      case characters.SOLIDUS:
        this.tempBuffer = "";
        this.setState(this.states.script_data_escaped_end_tag_open);
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      tmp += 0x0020;
      /* falls through */
      case 0x0061: //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.tempBuffer = String.fromCharCode(tmp);
      this.setState(this.states.script_data_double_escape_start);
      this.emitToken(characters.LESSTHAN_SIGN);
      this.emitToken(character);
      break;
      default:
        this.setState(this.states.script_data_escaped);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_escaped_end_tag_open = function(character) {
    var tmp = character;
    switch(character) {
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      tmp += 0x0020;
      /* falls through */
      case 0x0061: //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.createEndTagToken();
      this._tagName = String.fromCharCode(tmp);
      this.tempBuffer += String.fromCharCode(character);
      this.setState(this.states.script_data_escaped_end_tag_name);
      break;
      default:
        this.setState(this.states.script_data_escaped);
        this.emitToken(characters.LESSTHAN_SIGN);
        this.emitToken(characters.SOLIDUS);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_escaped_end_tag_name = function(character) {
    this.end_tag_name(character, this.states.script_data_escaped);
  };

  Tokenizer.prototype.script_data_double_escape_start = function(character) {
    var tmp = character;
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
      case characters.SOLIDUS:
      case characters.GREATERTHAN_SIGN:
        this.setState((this.tempBuffer === "script") ? this.states.script_data_double_escaped : this.states.script_data_escaped);
        this.emitToken(character);
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      tmp += 0x0020;
      /* falls through */
      case 0x0061: //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.tempBuffer +=  String.fromCharCode(tmp);
      this.emitToken(character);
      break;
      default:
        this.setState(this.states.script_data_escaped);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_double_escaped = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.script_data_double_escaped_dash);
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_double_escaped_lessthan_sign);
        this.emitToken(characters.LESSTHAN_SIGN);
        break;
      case characters.NULL:
        this.parseError();
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data_double_escaped_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.script_data_double_escaped_dash_dash);
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_double_escaped_lessthan_sign);
        this.emitToken(characters.LESSTHAN_SIGN);
        break;
      case characters.NULL:
        this.parseError();
        this.setState(this.states.script_data_double_escaped);
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.setState(this.states.script_data_double_escaped);
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data_double_escaped_dash_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.emitToken(characters.HYPHEN_MINUS);
        break;
      case characters.LESSTHAN_SIGN:
        this.setState(this.states.script_data_double_escaped_lessthan_sign);
        this.emitToken(characters.LESSTHAN_SIGN);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.script_data);
        this.emitToken(characters.GREATERTHAN_SIGN);
        break;
      case characters.NULL:
        this.parseError();
        this.setState(this.states.script_data_double_escaped);
        this.emitToken(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.setState(this.states.script_data_double_escaped);
        this.emitToken(character);
        break;
    }
  };

  Tokenizer.prototype.script_data_double_escaped_lessthan_sign = function(character) {
    switch(character) {
      case characters.SOLIDUS:
        this.tempBuffer = "";
        this.setState(this.states.script_data_double_escape_end);
        this.emitToken(characters.SOLIDUS);
        break;
      default:
        this.setState(this.states.script_data_escaped);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.script_data_double_escape_end = function(character) {
    var tmp = character;
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
      case characters.SOLIDUS:
      case characters.GREATERTHAN_SIGN:
        this.setState((this.tempBuffer === "script") ? this.states.script_data_escaped : this.states.script_data_double_escaped);
        this.emitToken(character);
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      tmp += 0x0020;
      /* falls through */
      case 0x0061: //[a-z]
      case 0x0062:case 0x0063:case 0x0064:case 0x0065:case 0x0066:
      case 0x0067:case 0x0068:case 0x0069:case 0x006A:case 0x006B:
      case 0x006C:case 0x006D:case 0x006E:case 0x006F:case 0x0070:
      case 0x0071:case 0x0072:case 0x0073:case 0x0074:case 0x0075:
      case 0x0076:case 0x0077:case 0x0078:case 0x0079:case 0x007A:
      this.tempBuffer +=  String.fromCharCode(tmp);
      this.emitToken(character);
      break;
      default:
        this.setState(this.states.script_data_double_escaped);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.before_attribute_name = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.SOLIDUS:
        this.setState(this.states.self_closing_start_tag);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitTag();
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this.createAttribute();
      this.attrName = String.fromCharCode(character + 0x0020);
      this.attrValue = "";
      this.setState(this.states.attribute_name);
      break;
      case characters.NULL:
        this.parseError();
        this.createAttribute();
        this.attrName = String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        this.attrValue = "";
        this.setState(this.states.attribute_name);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      case characters.QUOTATION_MARK:
      case characters.APOSTROPHE:
      case characters.LESSTHAN_SIGN:
      case characters.EQUALS_SIGN:
        this.parseError();
      /* falls through */
      default:
        this.createAttribute();
        this.attrName = String.fromCharCode(character);
        this.attrValue = "";
        this.setState(this.states.attribute_name);
        break;

    }

  };

  Tokenizer.prototype.attribute_name = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.after_attribute_name);
        break;
      case characters.SOLIDUS:
        this.addAttribute();
        this.setState(this.states.self_closing_start_tag);
        break;
      case characters.EQUALS_SIGN:
        this.setState(this.states.before_attribute_value);
        break;
      case characters.GREATERTHAN_SIGN:
        this.addAttribute();
        this.setState(this.states.data);
        this.emitTag();
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this.attrName += String.fromCharCode(character + 0x0020);
      break;
      case characters.NULL:
        this.parseError();
        this.attrName += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      case characters.QUOTATION_MARK:
      case characters.APOSTROPHE:
      case characters.LESSTHAN_SIGN:
        this.parseError();
      /* falls through */
      default:
        this.attrName += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.after_attribute_name = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.SOLIDUS:
        this.addAttribute();
        this.setState(this.states.self_closing_start_tag);
        break;
      case characters.EQUALS_SIGN:
        this.setState(this.states.before_attribute_value);
        break;
      case characters.GREATERTHAN_SIGN:
        this.addAttribute();
        this.setState(this.states.data);
        this.emitTag();
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this.addAttribute();
      this.createAttribute();
      this.attrName = String.fromCharCode(character + 0x0020);
      this.attrValue = "";
      this.setState(this.states.attribute_name);
      break;
      case characters.NULL:
        this.parseError();
        this.createAttribute();
        this.attrName = String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        this.attrValue = "";
        this.setState(this.states.attribute_name);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      case characters.QUOTATION_MARK:
      case characters.APOSTROPHE:
      case characters.LESSTHAN_SIGN:
        this.parseError();
      /* falls through */
      default:
        this.addAttribute();
        this.createAttribute();
        this.attrName = String.fromCharCode(character);
        this.attrValue = "";
        this.setState(this.states.attribute_name);
        break;
    }
  };

  Tokenizer.prototype.before_attribute_value = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.QUOTATION_MARK:
        this.setState(this.states.attribute_value_double_quoted);
        break;
      case characters.AMPERSAND:
        this.setState(this.states.attribute_value_unquoted);
        this.position--;
        break;
      case characters.APOSTROPHE:
        this.setState(this.states.attribute_value_single_quoted);
        break;
      case characters.NULL:
        this.parseError();
        this.attrValue +=  String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.attribute_value_unquoted);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.setState(this.states.data);
        this.emitTag();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      case characters.LESSTHAN_SIGN:
      case characters.EQUALS_SIGN:
      case characters.GRAVE_ACCENT:
        this.parseError();
      /* falls through */
      default:
        this.attrValue += String.fromCharCode(character);
        this.setState(this.states.attribute_value_unquoted);
        break;
    }
  };

  Tokenizer.prototype.attribute_value_double_quoted = function(character) {
    switch(character) {
      case characters.QUOTATION_MARK:
        this.addAttribute();
        this.setState(this.states.after_attribute_value_quoted);
        break;
      case characters.AMPERSAND:
        this.revertState = this.state;
        this.setState(this.states.character_reference_in_attribute_value);
        this.additionalAllowedCharacter = characters.QUOTATION_MARK;
        break;
      case characters.NULL:
        this.parseError();
        this.attrValue += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.attrValue += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.attribute_value_single_quoted = function(character) {
    switch(character) {
      case characters.APOSTROPHE:
        this.addAttribute();
        this.setState(this.states.after_attribute_value_quoted);
        break;
      case characters.AMPERSAND:
        this.revertState = this.state;
        this.setState(this.states.character_reference_in_attribute_value);
        this.additionalAllowedCharacter = characters.APOSTROPHE;
        break;
      case characters.NULL:
        this.parseError();
        this.attrValue += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.attrValue += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.attribute_value_unquoted = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.addAttribute();
        this.setState(this.states.before_attribute_name);
        break;
      case characters.AMPERSAND:
        this.revertState = this.state;
        this.setState(this.states.character_reference_in_attribute_value);
        this.additionalAllowedCharacter = characters.GREATERTHAN_SIGN;
        break;
      case characters.GREATERTHAN_SIGN:
        this.addAttribute();
        this.setState(this.states.data);
        this.emitTag();
        break;
      case characters.NULL:
        this.parseError();
        this.attrValue += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      case characters.QUOTATION_MARK:
      case characters.APOSTROPHE:
      case characters.LESSTHAN_SIGN:
      case characters.EQUALS_SIGN:
      case characters.GRAVE_ACCENT:
        this.parseError();
      /* falls through */
      default:
        this.attrValue += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.character_reference_in_attribute_value = function(input) {
    var tmp = this.consumeCharacterReference(input, true);
    if (!tmp) {
      this.attrValue += String.fromCharCode(characters.AMPERSAND);
    } else {
      var self = this;
      tmp.forEach(function(chr) {
        self.attrValue += String.fromCharCode(chr);
      });
    }

    /*
     Attempt to consume a character reference.
     If nothing is returned, append a U+0026 AMPERSAND character (&) to the current attribute's value.
     Otherwise, append the returned character tokens to the current attribute's value.
     */

    this.setState(this.revertState);
  };

  Tokenizer.prototype.after_attribute_value_quoted = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.addAttribute();
        this.setState(this.states.before_attribute_name);
        break;
      case characters.SOLIDUS:
        this.setState(this.states.self_closing_start_tag);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitTag();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.parseError();
        this.setState(this.states.before_attribute_name);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.self_closing_start_tag = function(character) {
    switch(character) {
      case characters.GREATERTHAN_SIGN:
        this.selfClosing = true;
        this.setState(this.states.data);
        this.emitTag();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.position--;
        break;
      default:
        this.parseError();
        this.setState(this.states.before_attribute_name);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.bogus_comment = function(input) {
    var consumed = null;
    this.commentData = "";
    this.position--;
    var error = false;
    while((consumed = this.consumeCharacter(input)) !== characters.GREATERTHAN_SIGN && consumed !== characters.EOF) {
      if (consumed === characters.NULL) {
        consumed = characters.REPLACEMENT_CHARACTER;
      }

      this.commentData += String.fromCharCode(consumed);
    }
    this.emitComment();

    /*
     Consume every character up to and including the first U+003E GREATER-THAN SIGN character (>) or the end of the file (EOF),
     whichever comes first. Emit a comment token whose data is the concatenation of all the characters starting from and including
     the character that caused the state machine to switch into the bogus comment state, up to and including the character
     immediately before the last consumed character (i.e. up to the character just before the U+003E or EOF character), but
     with any U+0000 NULL characters replaced by U+FFFD REPLACEMENT CHARACTER characters. (If the comment was started by the
     end of the file (EOF), the token is empty. Similarly, the token is empty if it was generated by the string "<!>".)
     */
    this.setState(this.states.data);
  };

  Tokenizer.prototype.markup_declaration_open = function(input) {
    var lookahead = input.slice(this.position, this.position+7);
    if (input[this.position] === "-" && input[this.position+1] ===  "-") {
      this.position+=2;
      this.createComment();
      this.setState(this.states.comment_start);
    } else if (lookahead.join("").toUpperCase() === "DOCTYPE") {
      this.position+=7;
      this.setState(this.states.doctype);
    } else if (this.parser.currentNode() && this.parser.currentNode().namespaceURI !== namespace.HTML && lookahead.join("").toUpperCase() === "[CDATA[") {
      this.position+=7;
      this.setState(this.states.CDATA_section);
    } else {
      lookahead.shift();
      while(lookahead.length) {
        if (invalidCharacters(this.codePointAt(lookahead, 0))) {
          this.parseError();
          break;
        }
        lookahead.shift();
      }
      this.parseError();
      this.setState(this.states.bogus_comment);
      this.position++;
    }
  };

  Tokenizer.prototype.comment_start = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.comment_start_dash);
        break;
      case characters.NULL:
        this.parseError();
        this.commentData += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.comment);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        this.position--;
        break;
      default:
        this.commentData += String.fromCharCode(character);
        this.setState(this.states.comment);
        break;
    }
  };

  Tokenizer.prototype.comment_start_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.comment_end);
        break;
      case characters.NULL:
        this.parseError();
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.comment);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        this.position--;
        break;
      default:
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, character);
        this.setState(this.states.comment);
        break;
    }
  };

  Tokenizer.prototype.comment = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.comment_end_dash);
        break;
      case characters.NULL:
        this.parseError();
        this.commentData += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        this.position--;
        break;
      default:
        this.commentData += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.comment_end_dash = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.setState(this.states.comment_end);
        break;
      case characters.NULL:
        this.parseError();
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.comment);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        this.position--;
        break;
      default:
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, character);
        this.setState(this.states.comment);
        break;
    }
  };

  Tokenizer.prototype.comment_end = function(character) {
    switch(character) {
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitComment();
        break;
      case characters.NULL:
        this.parseError();
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.HYPHEN_MINUS, characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.comment);
        break;
      case characters.EXCLAMATION_MARK:
        this.parseError();
        this.setState(this.states.comment_end_bang);
        break;
      case characters.HYPHEN_MINUS:
        this.parseError();
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        this.position--;
        break;
      default:
        this.parseError();
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.HYPHEN_MINUS, character);
        this.setState(this.states.comment);
        break;
    }
  };

  Tokenizer.prototype.comment_end_bang = function(character) {
    switch(character) {
      case characters.HYPHEN_MINUS:
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.HYPHEN_MINUS, characters.EXCLAMATION_MARK);
        this.setState(this.states.comment_end_dash);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitComment();
        break;
      case characters.NULL:
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.HYPHEN_MINUS, characters.EXCLAMATION_MARK, characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.comment);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.emitComment();
        this.position--;
        break;
      default:
        this.commentData += String.fromCharCode(characters.HYPHEN_MINUS, characters.HYPHEN_MINUS, characters.EXCLAMATION_MARK, character);
        this.setState(this.states.comment);
        break;
    }
  };

  Tokenizer.prototype.doctype = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.before_doctype_name);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.createDoctype();
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.setState(this.states.before_doctype_name);
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.before_doctype_name = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this.createDoctype();
      this.doctypeName = String.fromCharCode(character + 0x0020);
      this.setState(this.states.doctype_name);
      break;
      case characters.NULL:
        this.parseError();
        this.createDoctype();
        this.doctypeName = String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        this.setState(this.states.doctype_name);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.createDoctype();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.createDoctype();
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.createDoctype();
        this.doctypeName = String.fromCharCode(character);
        this.setState(this.states.doctype_name);
        break;
    }
  };

  Tokenizer.prototype.doctype_name = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.after_doctype_name);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case 0x0041: //[A-Z]
      case 0x0042:case 0x0043:case 0x0044:case 0x0045:case 0x0046:
      case 0x0047:case 0x0048:case 0x0049:case 0x004A:case 0x004B:
      case 0x004C:case 0x004D:case 0x004E:case 0x004F:case 0x0050:
      case 0x0051:case 0x0052:case 0x0053:case 0x0054:case 0x0055:
      case 0x0056:case 0x0057:case 0x0058:case 0x0059:case 0x005A:
      this.doctypeName += String.fromCharCode(character + 0x0020);
      break;
      case characters.NULL:
        this.parseError();
        this.doctypeName += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.doctypeName += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.after_doctype_name = function(character, input) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        if (input.slice(this.position - 1, this.position + 5).join("").toUpperCase() === "PUBLIC") {
          this.position += 5;
          this.setState(this.states.after_doctype_public_keyword);
        } else if (input.slice(this.position - 1, this.position + 5).join("").toUpperCase() === "SYSTEM") {
          this.position += 5;
          this.setState(this.states.after_doctype_system_keyword);
        } else {
          this.parseError();
          this.forceQuirks = true;
          this.setState(this.states.bogus_doctype);
        }
    }
  };

  Tokenizer.prototype.after_doctype_public_keyword = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.before_doctype_public_identifier);
        break;
      case characters.QUOTATION_MARK:
        this.parseError();
        this.doctypePublidId = "";
        this.setState(this.states.doctype_public_identifier_double_quoted);
        break;
      case characters.APOSTROPHE:
        this.parseError();
        this.doctypePublidId = "";
        this.setState(this.states.doctype_public_identifier_single_quoted);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.before_doctype_public_identifier = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.QUOTATION_MARK:
        this.doctypePublidId = "";
        this.setState(this.states.doctype_public_identifier_double_quoted);
        break;
      case characters.APOSTROPHE:
        this.doctypePublidId = "";
        this.setState(this.states.doctype_public_identifier_single_quoted);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.doctype_public_identifier_double_quoted = function(character) {
    switch(character) {
      case characters.QUOTATION_MARK:
        this.setState(this.states.after_doctype_public_identifier);
        break;
      case characters.NULL:
        this.parseError();
        this.doctypePublidId += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.doctypePublidId += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.doctype_public_identifier_single_quoted = function(character) {
    switch(character) {
      case characters.APOSTROPHE:
        this.setState(this.states.after_doctype_public_identifier);
        break;
      case characters.NULL:
        this.parseError();
        this.doctypePublidId += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.doctypePublidId += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.after_doctype_public_identifier = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.between_doctype_public_and_system_identifiers);
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.QUOTATION_MARK:
        this.parseError();
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_double_quoted);
        break;
      case characters.APOSTROPHE:
        this.parseError();
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_single_quoted);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.between_doctype_public_and_system_identifiers = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.QUOTATION_MARK:
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_double_quoted);
        break;
      case characters.APOSTROPHE:
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_single_quoted);
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.after_doctype_system_keyword = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        this.setState(this.states.before_doctype_system_identifier);
        break;
      case characters.QUOTATION_MARK:
        this.parseError();
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_double_quoted);
        break;
      case characters.APOSTROPHE:
        this.parseError();
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_single_quoted);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.before_doctype_system_identifier = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.QUOTATION_MARK:
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_double_quoted);
        break;
      case characters.APOSTROPHE:
        this.doctypeSystemId = "";
        this.setState(this.states.doctype_system_identifier_single_quoted);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.doctype_system_identifier_double_quoted = function(character) {
    switch(character) {
      case characters.QUOTATION_MARK:
        this.setState(this.states.after_doctype_system_identifier);
        break;
      case characters.NULL:
        this.parseError();
        this.doctypeSystemId += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.doctypeSystemId += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.doctype_system_identifier_single_quoted = function(character) {
    switch(character) {
      case characters.APOSTROPHE:
        this.setState(this.states.after_doctype_system_identifier);
        break;
      case characters.NULL:
        this.parseError();
        this.doctypeSystemId += String.fromCharCode(characters.REPLACEMENT_CHARACTER);
        break;
      case characters.GREATERTHAN_SIGN:
        this.parseError();
        this.forceQuirks = true;
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.doctypeSystemId += String.fromCharCode(character);
        break;
    }
  };

  Tokenizer.prototype.after_doctype_system_identifier = function(character) {
    switch(character) {
      case characters.TAB:
      case characters.LF:
      case characters.FF:
      case characters.SPACE:
        break;
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.parseError();
        this.setState(this.states.data);
        this.forceQuirks = true;
        this.emitDocType();
        this.position--;
        break;
      default:
        this.parseError();
        this.setState(this.states.bogus_doctype);
        break;
    }
  };

  Tokenizer.prototype.bogus_doctype = function(character) {
    switch(character) {
      case characters.GREATERTHAN_SIGN:
        this.setState(this.states.data);
        this.emitDocType();
        break;
      case characters.EOF:
        this.setState(this.states.data);
        this.emitDocType();
        this.position--;
        break;
    }
  };

  Tokenizer.prototype.CDATA_section = function(input) {
    this.setState(this.states.data);
    var character;
    var str = "";
    var self = this;
    while((character = this.consumeCharacter(input)) !== characters.EOF) {
      str += String.fromCharCode(character);
      if (str.substr(str.length - 3) === "]]>") {
        str = str.substr(0, str.length - 3);
        break;
      }
    }

    str.split("").forEach(function(chr) {
      self.emitToken(chr.charCodeAt(0));
    });

    if (character === characters.EOF) {
      this.position--;
    }
  };


  /**
   * (c) 2012 Steven Levithan <http://slevithan.com/>
   * MIT license
   */
  Tokenizer.prototype.codePointAt = function(input, pos) {
    if (!input[pos + 1]) {
      return input[pos].charCodeAt(0);
    }
    var code = input[pos].charCodeAt(0),
      next = input[pos + 1].charCodeAt(0);
    // If a surrogate pair
    if (0xD800 <= code && code <= 0xDBFF && 0xDC00 <= next && next <= 0xDFFF) {
      return ((code - 0xD800) * 0x400) + (next - 0xDC00) + 0x10000;
    }
    return code;
  };

  Tokenizer.prototype.states = {
    data: 0,
    RCDATA: 1,
    tag_open: 2,
    character_reference_in_data: 3,
    character_reference_in_RCDATA: 4,
    RCDATA_less_than_sign: 5,
    markup_declaration_open: 6,
    end_tag_open: 7,
    tag_name: 8,
    bogus_comment: 9,
    before_attribute_name: 10,
    self_closing_start_tag: 11,
    plaintext: 12,
    script_data: 13,
    rawtext: 14,
    script_data_lessthan_sign: 15,
    rawtext_lessthan_sign: 16,
    RCDATA_end_tag_open: 17,
    RCDATA_end_tag_name: 18,
    rawtext_end_tag_open: 19,
    rawtext_end_tag_name: 20,
    script_data_end_tag_open: 21,
    script_data_escape_start: 22,
    script_data_end_tag_name: 23,
    script_data_escaped_dash: 24,
    script_data_escape_start_dash: 25,
    script_data_escaped_dash_dash: 26,
    script_data_escaped: 27,
    script_data_escaped_lessthan_sign: 28,
    script_data_escaped_end_tag_open: 29,
    script_data_double_escape_start: 30,
    script_data_escaped_end_tag_name: 31,
    script_data_double_escaped: 32,
    script_data_double_escaped_dash: 33,
    script_data_double_escaped_lessthan_sign: 34,
    script_data_double_escaped_dash_dash: 35,
    script_data_double_escape_end: 36,
    attribute_name: 37,
    after_attribute_name: 38,
    before_attribute_value: 39,
    attribute_value_double_quoted: 40,
    attribute_value_unquoted: 41,
    attribute_value_single_quoted: 42,
    after_attribute_value_quoted: 43,
    character_reference_in_attribute_value: 44,
    comment_start: 45,
    doctype: 46,
    before_doctype_name: 47,
    doctype_name: 48,
    after_doctype_name: 49,
    comment_start_dash: 50,
    comment_end: 51,
    comment: 52,
    comment_end_dash: 53,
    comment_end_bang: 54,
    after_doctype_public_keyword: 55,
    after_doctype_system_keyword: 56,
    bogus_doctype: 57,
    before_doctype_public_identifier: 58,
    doctype_public_identifier_single_quoted: 59,
    doctype_public_identifier_double_quoted: 60,
    after_doctype_public_identifier: 61,
    between_doctype_public_and_system_identifiers: 62,
    doctype_system_identifier_single_quoted: 63,
    doctype_system_identifier_double_quoted: 64,
    before_doctype_system_identifier: 65,
    after_doctype_system_identifier: 66,
    CDATA_section: 67
  };

  exports.tokenizerStates = Tokenizer.prototype.states;
  exports.Tokenizer = Tokenizer;

}(typeof exports === 'object' && exports || this));
