const number = {
    hasTop: (num) => {
        switch (num) {
            case 1:
            case 4:
                return false
            default:
                return true
        }
    },

    hasMiddle: (num) => {
        switch (num) {
            case 1:
            case 7:
            case 0:
                return false
            default:
                return true
        }
    },

    hasBottom: (num) => {
        switch (num) {
            case 1:
            case 4:
            case 7:
                return false
            default:
                return true
        }
    },

    hasTopLeft: (num) => {
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 7:
                return false
            default:
                return true
        }
    },

    hasTopRight: (num) => {
        switch (num) {
            case 5:
            case 6:
                return false
            default:
                return true
        }
    },

    hasBottomLeft: (num) => {
        switch (num) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 7:
            case 9:
                return false
            default:
                return true
        }
    },

    hasBottomRight: (num) => {
        switch (num) {
            case 2:
                return false
            default:
                return true
        }
    }
}

export default number