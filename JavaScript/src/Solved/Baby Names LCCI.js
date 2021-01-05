// https://leetcode-cn.com/problems/baby-names-lcci/
var Test = require('../Common/Test');

var trulyMostPopular = function (names, synonyms) {
    synonyms = synonyms.map(str => str.substring(1, str.length - 1).split(',').sort());
    let disjoint = new Map();
    for (let [name1, name2] of synonyms) {
        if (!disjoint.has(name2)) {
            disjoint.set(name2, name1);
        }
        else {
            while (disjoint.has(name2)) name2 = disjoint.get(name2);
            while (disjoint.has(name1)) name1 = disjoint.get(name1);
            if (name1 != name2) {
                if (name1 < name2) {
                    disjoint.set(name2, name1);
                }
                else {
                    disjoint.set(name1, name2);
                }
            }
        }
    }
    const disjoint2 = new Map();
    for (let [name1, name2] of disjoint) {
        while (disjoint.has(name2)) name2 = disjoint.get(name2);
        disjoint2.set(name1, name2);
    }
    disjoint = disjoint2;
    const regex = /(.*)\((.*)\)/;
    names = names.map(str => {
        const m = str.match(regex);
        return [m[1], parseInt(m[2])];
    });
    const counter = new Map();
    for (let [name, count] of names) {
        if (disjoint.has(name)) {
            name = disjoint.get(name);
        }
        if (!counter.has(name)) {
            counter.set(name, 0);
        }
        counter.set(name, counter.get(name) + count);
    }
    const result = [];
    for (const [name, count] of counter) {
        result.push(`${name}(${count})`);
    }
    return result.sort();
}

function run(names, synonyms) {
    Test.run(trulyMostPopular, names, synonyms);
}

// run(["John(15)", "Jon(12)", "Chris(13)", "Kris(4)", "Christopher(19)"], ["(Jon,John)", "(John,Johnny)", "(Chris,Kris)", "(Chris,Christopher)"]);
// run(["Fcclu(70)", "Ommjh(63)", "Dnsay(60)", "Qbmk(45)", "Unsb(26)", "Gauuk(75)", "Wzyyim(34)", "Bnea(55)", "Kri(71)", "Qnaakk(76)", "Gnplfi(68)", "Hfp(97)", "Qoi(70)", "Ijveol(46)", "Iidh(64)", "Qiy(26)", "Mcnef(59)", "Hvueqc(91)", "Obcbxb(54)", "Dhe(79)", "Jfq(26)", "Uwjsu(41)", "Wfmspz(39)", "Ebov(96)", "Ofl(72)", "Uvkdpn(71)", "Avcp(41)", "Msyr(9)", "Pgfpma(95)", "Vbp(89)", "Koaak(53)", "Qyqifg(85)", "Dwayf(97)", "Oltadg(95)", "Mwwvj(70)", "Uxf(74)", "Qvjp(6)", "Grqrg(81)", "Naf(3)", "Xjjol(62)", "Ibink(32)", "Qxabri(41)", "Ucqh(51)", "Mtz(72)", "Aeax(82)", "Kxutz(5)", "Qweye(15)", "Ard(82)", "Chycnm(4)", "Hcvcgc(97)", "Knpuq(61)", "Yeekgc(11)", "Ntfr(70)", "Lucf(62)", "Uhsg(23)", "Csh(39)", "Txixz(87)", "Kgabb(80)", "Weusps(79)", "Nuq(61)", "Drzsnw(87)", "Xxmsn(98)", "Onnev(77)", "Owh(64)", "Fpaf(46)", "Hvia(6)", "Kufa(95)", "Chhmx(66)", "Avmzs(39)", "Okwuq(96)", "Hrschk(30)", "Ffwni(67)", "Wpagta(25)", "Npilye(14)", "Axwtno(57)", "Qxkjt(31)", "Dwifi(51)", "Kasgmw(95)", "Vgxj(11)", "Nsgbth(26)", "Nzaz(51)", "Owk(87)", "Yjc(94)", "Hljt(21)", "Jvqg(47)", "Alrksy(69)", "Tlv(95)", "Acohsf(86)", "Qejo(60)", "Gbclj(20)", "Nekuam(17)", "Meutux(64)", "Tuvzkd(85)", "Fvkhz(98)", "Rngl(12)", "Gbkq(77)", "Uzgx(65)", "Ghc(15)", "Qsc(48)", "Siv(47)"],
// ["(Gnplfi,Qxabri)", "(Uzgx,Siv)", "(Bnea,Lucf)", "(Qnaakk,Msyr)", "(Grqrg,Gbclj)", "(Uhsg,Qejo)", "(Csh,Wpagta)", "(Xjjol,Lucf)", "(Qoi,Obcbxb)", "(Npilye,Vgxj)", "(Aeax,Ghc)", "(Txixz,Ffwni)", "(Qweye,Qsc)", "(Kri,Tuvzkd)", "(Ommjh,Vbp)", "(Pgfpma,Xxmsn)", "(Uhsg,Csh)", "(Qvjp,Kxutz)", "(Qxkjt,Tlv)", "(Wfmspz,Owk)", "(Dwayf,Chycnm)", "(Iidh,Qvjp)", "(Dnsay,Rngl)", "(Qweye,Tlv)", "(Wzyyim,Kxutz)", "(Hvueqc,Qejo)", "(Tlv,Ghc)", "(Hvia,Fvkhz)", "(Msyr,Owk)", "(Hrschk,Hljt)", "(Owh,Gbclj)", "(Dwifi,Uzgx)", "(Iidh,Fpaf)", "(Iidh,Meutux)", "(Txixz,Ghc)", "(Gbclj,Qsc)", "(Kgabb,Tuvzkd)", "(Uwjsu,Grqrg)", "(Vbp,Dwayf)", "(Xxmsn,Chhmx)", "(Uxf,Uzgx)"]);
// run(["Pwsuo(71)", "Prf(48)", "Rgbu(49)", "Zvzm(31)", "Xxcl(25)", "Bbcpth(42)", "Padz(70)", "Jmqqsj(19)", "Uwy(26)", "Jylbla(65)", "Xioal(11)", "Npbu(62)", "Jpftyg(96)", "Tal(46)", "Hnc(100)", "Yldu(85)", "Alqw(45)", "Wbcxi(34)", "Kxjw(36)", "Clplqf(8)", "Fayxe(66)", "Slfwyo(48)", "Xbesji(70)", "Pmbz(22)", "Oip(2)", "Fzoe(63)", "Qync(79)", "Utc(11)", "Sqwejn(19)", "Ngi(8)", "Gsiiyo(60)", "Bcs(73)", "Icsvku(1)", "Yzwm(92)", "Vaakt(21)", "Uvt(70)", "Axaqkm(100)", "Gyhh(84)", "Gaoo(98)", "Ghlj(35)", "Umt(13)", "Nfimij(52)", "Zmeop(77)", "Vje(29)", "Rqa(47)", "Upn(89)", "Zhc(44)", "Slh(66)", "Orpqim(69)", "Vxs(85)", "Gql(19)", "Sfjdjc(62)", "Ccqunq(93)", "Oyo(32)", "Bvnkk(52)", "Pxzfjg(45)", "Kaaht(28)", "Arrugl(57)", "Vqnjg(50)", "Dbufek(63)", "Fshi(62)", "Lvaaz(63)", "Phlto(41)", "Lnow(70)", "Mqgga(31)", "Adlue(82)", "Zqiqe(27)", "Mgs(46)", "Zboes(56)", "Dma(70)", "Jnij(57)", "Ghk(14)", "Mrqlne(39)", "Ljkzhs(35)", "Rmlbnj(42)", "Qszsny(93)", "Aasipa(26)", "Wzt(41)", "Xuzubb(90)", "Maeb(56)", "Mlo(18)", "Rttg(4)", "Kmrev(31)", "Kqjl(39)", "Iggrg(47)", "Mork(88)", "Lwyfn(50)", "Lcp(42)", "Zpm(5)", "Qlvglt(36)", "Liyd(48)", "Jxv(67)", "Xaq(70)", "Tkbn(81)", "Rgd(85)", "Ttj(28)", "Ndc(62)", "Bjfkzo(54)", "Lqrmqh(50)", "Vhdmab(41)"],
    // ["(Uvt,Rqa)", "(Qync,Kqjl)", "(Fayxe,Upn)", "(Maeb,Xaq)", "(Pmbz,Vje)", "(Hnc,Dma)", "(Pwsuo,Gyhh)", "(Gyhh,Aasipa)", "(Fzoe,Lcp)", "(Mgs,Vhdmab)", "(Qync,Rgd)", "(Gql,Liyd)", "(Gyhh,Tkbn)", "(Arrugl,Adlue)", "(Wbcxi,Slfwyo)", "(Yzwm,Vqnjg)", "(Lnow,Vhdmab)", "(Lvaaz,Rttg)", "(Nfimij,Iggrg)", "(Vje,Lqrmqh)", "(Jylbla,Ljkzhs)", "(Jnij,Mlo)", "(Adlue,Zqiqe)", "(Qync,Rttg)", "(Gsiiyo,Vxs)", "(Xxcl,Fzoe)", "(Dbufek,Xaq)", "(Ccqunq,Qszsny)", "(Zmeop,Mork)", "(Qync,Ngi)", "(Zboes,Rmlbnj)", "(Yldu,Jxv)", "(Padz,Gsiiyo)", "(Oip,Utc)", "(Tal,Pxzfjg)", "(Adlue,Zpm)", "(Bbcpth,Mork)", "(Qync,Lvaaz)", "(Pmbz,Qync)", "(Alqw,Ngi)", "(Bcs,Maeb)", "(Rgbu,Zmeop)"]);

function compareResult() {
    const result1 = ["Fcclu(70)", "Chycnm(253)", "Dnsay(72)", "Qbmk(45)", "Unsb(26)", "Gauuk(75)", "Fpaf(219)", "Bnea(179)", "Kgabb(236)", "Msyr(211)", "Gnplfi(109)", "Hfp(97)", "Obcbxb(124)", "Ijveol(46)", "Qiy(26)", "Mcnef(59)", "Csh(238)", "Dhe(79)", "Jfq(26)", "Ffwni(564)", "Ebov(96)", "Ofl(72)", "Uvkdpn(71)", "Avcp(41)", "Chhmx(259)", "Koaak(53)", "Qyqifg(85)", "Oltadg(95)", "Mwwvj(70)", "Dwifi(237)", "Naf(3)", "Ibink(32)", "Ucqh(51)", "Mtz(72)", "Aeax(82)", "Ard(82)", "Hcvcgc(97)", "Knpuq(61)", "Yeekgc(11)", "Ntfr(70)", "Weusps(79)", "Nuq(61)", "Drzsnw(87)", "Onnev(77)", "Fvkhz(104)", "Kufa(95)", "Avmzs(39)", "Okwuq(96)", "Hljt(51)", "Npilye(25)", "Axwtno(57)", "Kasgmw(95)", "Nsgbth(26)", "Nzaz(51)", "Yjc(94)", "Jvqg(47)", "Alrksy(69)", "Acohsf(86)", "Nekuam(17)", "Gbkq(77)"];
    const result2 = ["Fcclu(70)", "Dnsay(72)", "Qbmk(45)", "Unsb(26)", "Gauuk(75)", "Gnplfi(109)", "Hfp(97)", "Obcbxb(124)", "Ijveol(46)", "Fpaf(219)", "Qiy(26)", "Mcnef(59)", "Dhe(79)", "Jfq(26)", "Ebov(96)", "Ofl(72)", "Uvkdpn(71)", "Avcp(41)", "Chycnm(253)", "Koaak(53)", "Qyqifg(85)", "Oltadg(95)", "Mwwvj(70)", "Naf(3)", "Ibink(32)", "Ucqh(51)", "Mtz(72)", "Ard(82)", "Hcvcgc(97)", "Knpuq(61)", "Yeekgc(11)", "Ntfr(70)", "Bnea(179)", "Weusps(79)", "Nuq(61)", "Drzsnw(87)", "Chhmx(259)", "Onnev(77)", "Kufa(95)", "Avmzs(39)", "Okwuq(96)", "Hljt(51)", "Npilye(25)", "Axwtno(57)", "Kasgmw(95)", "Nsgbth(26)", "Nzaz(51)", "Msyr(211)", "Yjc(94)", "Jvqg(47)", "Alrksy(69)", "Aeax(646)", "Acohsf(86)", "Csh(238)", "Nekuam(17)", "Kgabb(236)", "Fvkhz(104)", "Gbkq(77)", "Dwifi(237)"];

    result1.sort();
    result2.sort();
    // result1.splice(17, 1);
    Test.compareArray(result1, result2);
}

// compareResult();
