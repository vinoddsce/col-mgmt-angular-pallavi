
const isError = true;

class DataSource {

    constructor() {
        let i = 0;
        this._id = setInterval(() => {
            this.emit(++i)
        }, 1000);
    }

    emit(n) {
        const limit = 10;
        if (this.ondata) {
            this.ondata(n);
        }
        if (isError) {
            if (this.error) {
                this.error("Nan magand !!!! Error !!!!");
            }
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
        if (n === limit) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }

    destroy() {
        clearInterval(this._id);
    }

}

const observer = {
    next: function (n) {
        console.log("Receied: ", n);
    },
    error: function (errMsg) {
        console.log("Error: ", errMsg);
    },
    onComplete: function () {
        console.log("Completed !!!!!");
    }
}


function counterOservable(observer) {
    const ds = new DataSource();
    ds.ondata = (n) => observer.next(n);
    ds.oncomplete = () => observer.onComplete();
    ds.error = (err) => observer.error(err);
}


counterOservable(observer);