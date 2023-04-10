

   
   
    global.accounts = {
        users: {}, // Dynamically add users
        active: null, // Active user in a @users
        save: () => {
            let storage_result = [];
            for (const [key, value] of Object.entries(accounts.users))
            {
                storage_result.push({accountId: value.accountId, authority: value.authority})
            }
            Storage.set('@accounts', JSON.stringify(storage_result));
            console.log(`[accounts] saved`);
        },

        add: (authority) => {
            accounts.users[authority.accountId] = new Account(authority.accountId, authority);
            accounts.save();
            Storage.set('@account', JSON.stringify({accountId: authority.accountId}));
            console.log(`[accounts] added`);
        },
    };
   
    export default class Account {

        constructor(accountId, authority) {
            this.accountId = accountId;
            this.authority = authority;
        }
        
        async connect() {
            accounts.active = this;
            await apicall('/accounts/me', (res) => {
                console.log(res);
                if (res.ok)
                {
                    this.authority = res.authority;
                    this.user = res.message;
                    return true;
                }
                this.logout();
                return false;
            });
        }

        authorization() {
            return {
                ACCOUNT_ID: this.accountId,
                ACCESS_TOKEN: this.authority.access_token,
            }
        }

        setAuthorization(authority) {
            this.authority = authority;
            accounts.save();
        }

        logout() {
            if (accounts?.active?.accountId === this.accountId)
            {
                accounts.active = null;
            }
            delete accounts.users[this.accountId];
            accounts.save();
        }

    }
