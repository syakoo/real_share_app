# Real Sharing
A simulation web app of a secret sharing scheme using NFC.

- gh-pages: https://syakoo.github.io/real_share_app/
- demo movie: https://youtu.be/6DLYic2Zvy0

# What's the Secret Sharing
From Wikipedia[Secret sharing](https://en.wikipedia.org/wiki/Secret_sharing)

> Secret sharing (also called secret splitting) refers to methods for distributing a secret amongst a group of participants, each of whom is allocated a share of the secret. The secret can be reconstructed only when a sufficient number, of possibly different types, of shares are combined together; individual shares are of no use on their own.

# Help
## SharingForm
In the sharing page, fill out the input form. The form contains three params below.

- Message
- Threshold
- Number of Shares

### Message
The string you want to secret. **Due to encoding issues, non-alphanumeric characters may not work well.**

### Threshold
The number of shares needed to unlock the secret.

### Number of Shares
The number of shares for writing data to NFC tags and cards.
