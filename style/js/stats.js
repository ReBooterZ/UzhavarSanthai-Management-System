google.maps.__gjsload__('stats', function (_) {
    var L1 = function () {
        this.b = new _.ql
    }, M1 = function (a) {
        var b = 0, c = 0;
        a.b.forEach(function (a) {
            b += a.lo;
            c += a.Jn
        });
        return c ? b / c : 0
    }, N1 = function (a, b, c) {
        var d = [];
        _.hk(a, function (a, c) {
            d.push(c + b + a)
        });
        return d.join(c)
    }, O1 = function (a) {
        var b = {};
        _.hk(a, function (a, d) {
            b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
        });
        return N1(b, ":", ",")
    }, P1 = function () {
        var a = _.Lf[35] ? _.N(_.xf(_.R), 11) : _.Fv, b = window.document;
        this.l = _.lj;
        this.f = a + "/maps/gen_204";
        this.j = b
    }, Q1 = function (a, b, c, d) {
        var e =
            {};
        e.host = window.document.location && window.document.location.host || window.location.host;
        e.v = a;
        e.r = Math.round(1 / b);
        c && (e.client = c);
        d && (e.key = d);
        return e
    }, R1 = function (a, b, c, d) {
        var e = _.M(_.R, 0, 1);
        this.m = a;
        this.C = b;
        this.l = e;
        this.f = c;
        this.j = d;
        this.b = new _.ql;
        this.B = _.Qa()
    }, T1 = function (a, b, c, d, e) {
        var f = _.M(_.R, 23, 500);
        var g = _.M(_.R, 22, 2);
        this.D = a;
        this.G = b;
        this.H = f;
        this.l = g;
        this.C = c;
        this.m = d;
        this.B = e;
        this.f = new _.ql;
        this.b = 0;
        this.j = _.Qa();
        S1(this)
    }, S1 = function (a) {
        window.setTimeout(function () {
                U1(a);
                S1(a)
            },
            Math.min(a.H * Math.pow(a.l, a.b), 2147483647))
    }, U1 = function (a) {
        var b = Q1(a.G, a.C, a.m, a.B);
        b.t = a.b + "-" + (_.Qa() - a.j);
        a.f.forEach(function (a, d) {
            a = a();
            0 < a && (b[d] = Number(a.toFixed(2)) + (_.Hm() ? "-if" : ""))
        });
        a.D.b({ev: "api_snap"}, b);
        ++a.b
    }, V1 = function (a, b, c, d, e) {
        this.B = a;
        this.C = b;
        this.m = c;
        this.j = d;
        this.l = e;
        this.f = {};
        this.b = []
    }, W1 = function (a, b, c) {
        var d = _.Xi;
        this.j = a;
        _.G.bind(this.j, "set_at", this, this.l);
        _.G.bind(this.j, "insert_at", this, this.l);
        this.B = b;
        this.C = d;
        this.m = c;
        this.f = 0;
        this.b = {};
        this.l()
    }, X1 = function () {
        this.j =
            _.N(_.R, 6);
        this.C = _.wf();
        this.b = new P1;
        _.Wi && new W1(_.Wi, (0, _.t)(this.b.b, this.b), !!this.j);
        var a = _.N(new _.qf(_.R.data[3]), 1);
        this.D = a.split(".")[1] || a;
        this.G = {};
        this.B = {};
        this.m = {};
        this.H = {};
        this.V = _.M(_.R, 0, 1);
        _.kj && (this.l = new T1(this.b, this.D, this.V, this.j, this.C))
    };
    L1.prototype.f = function (a, b, c) {
        this.b.set(_.Lc(a), {lo: b, Jn: c})
    };
    P1.prototype.b = function (a, b) {
        b = b || {};
        var c = _.vk().toString(36);
        b.src = "apiv3";
        b.token = this.l;
        b.ts = c.substr(c.length - 6);
        a.cad = O1(b);
        a = N1(a, "=", "&");
        a = this.f + "?target=api&" + a;
        this.j.createElement("img").src = a;
        (b = _.fb.__gm_captureCSI) && b(a)
    };
    R1.prototype.D = function (a, b) {
        b = _.p(b) ? b : 1;
        this.b.isEmpty() && window.setTimeout((0, _.t)(function () {
            var a = Q1(this.C, this.l, this.f, this.j);
            a.t = _.Qa() - this.B;
            var b = this.b;
            _.rl(b);
            for (var e = {}, f = 0; f < b.b.length; f++) {
                var g = b.b[f];
                e[g] = b.F[g]
            }
            _.Lz(a, e);
            this.b.clear();
            this.m.b({ev: "api_maprft"}, a)
        }, this), 500);
        b = this.b.get(a, 0) + b;
        this.b.set(a, b)
    };
    T1.prototype.register = function (a, b) {
        this.f.set(a, b)
    };
    V1.prototype.D = function (a) {
        this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.iA(this, this.G, 500))
    };
    V1.prototype.G = function () {
        for (var a = Q1(this.C, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b) a[c] = "1";
        a.hybrid = +_.qm();
        this.b.length = 0;
        this.B.b({ev: "api_mapft"}, a)
    };
    W1.prototype.l = function () {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.mn;
            a = a.timestamp - this.C;
            ++this.f;
            this.b[b] || (this.b[b] = 0);
            ++this.b[b];
            if (20 <= this.f && !(this.f % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.b[b];
                c.tr = this.f;
                c.te = a;
                c.hc = this.m ? "1" : "0";
                this.B({ev: "api_services"}, c)
            }
        }
    };
    X1.prototype.Yb = function (a) {
        a = _.Lc(a);
        this.G[a] || (this.G[a] = new V1(this.b, this.D, this.V, this.j, this.C));
        return this.G[a]
    };
    X1.prototype.ja = function (a) {
        a = _.Lc(a);
        this.B[a] || (this.B[a] = new R1(this.b, this.D, this.j, this.C));
        return this.B[a]
    };
    X1.prototype.f = function (a) {
        if (this.l) {
            this.m[a] || (this.m[a] = new _.jB, this.l.register(a, function () {
                return b.ob()
            }));
            var b = this.m[a];
            return b
        }
    };
    X1.prototype.ia = function (a) {
        if (this.l) {
            this.H[a] || (this.H[a] = new L1, this.l.register(a, function () {
                return M1(b)
            }));
            var b = this.H[a];
            return b
        }
    };
    var Y1 = new X1;
    _.ce("stats", Y1);
});
