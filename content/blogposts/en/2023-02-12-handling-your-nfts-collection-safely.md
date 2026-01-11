---
layout: blog
title: "Handling your NFTs collection safely"
date:  2023-02-12
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: cms
icon_author: Jess Bailey
icon_url: "https://unsplash.com/photos/q10VITrVYUM"
description: "A simple guide on how to protect your NFTs using hardware wallets"
author: teleyinex
---

In my previous [post](https://paragraph.xyz/@teleyinex.eth/my-first-year-in-web3), I explained how my first year in web3 went. Now, one year later, I've collected around 150 NFTs, and while none are over 1 ETH, I would be really sad if I lost one.

## First steps toward security

While I was already buying ETH and minting some NFTs, I did everything with my Metamask wallet. Yes, that's the easy way, and most people will do it like that because of all the things you need to learn before even considering what's a hard or cold wallet.

The typical situation in these cases is that you start buying with your Metanmask wallet, and suddenly you have not only ETH and other ERC20 tokens but some NFTs that you like, and you don't want to lose. But how can you protect them? And most importantly, why is it not that secure to keep using the Metamask (or any other hot wallet)?

Well, the answer is more or less straightforward: the seed phrase used to create your wallet is stored in your hard drive (or phone SD memory) and protected by the password that you have used to create the wallet.

The first problem is the password. Are you using a difficult password with numbers, letters, uppercase and lowercase chars, plus some symbols and longer than eight chars? The answer to this question is usually: 1234password or something even worst. Thus, the first thing to review is which password you have used.

-_But teleyinex, I don't share my computer with anyone else, or if I do they are people I trust. Why should I care?_

Well, the answer is simple: malware, virus, and phishing attacks are your enemies. And if they get you, they will hit you with all they have.

### Virus and malware

Nowadays, people creating malware and viruses know that people use crypto wallets and that by accessing your wallet, they can automatically transfer all your funds to theirs because if they get your seed phrase, there's no one, I repeat, no one, that can stop them from robbing you. Why? Because they have the access keys to your wallet, they can enter and exit whenever they want and transfer anything.

**Yes, re-read that part**. It is hard to digest because we are used to web2 services where in case of getting hacked, all you have to do is talk to the company, and after a few checks, you will be able to get your account back. But this is no more true in web3 because you are responsible for your safety. That's the price of being your own master and owning your data. Thus, this is important, and it needs a shift to think about how you can protect yourself.

Now that we know that hot wallets store your wallet seed phrase "encrypted" in your hard drive, imagine that your computer gets compromised with a virus or malware. If this is the case, you will have to trust that the virus has not cracked your password (remember that you used something like secure1234). If they crack your password, you are done. Consider your wallet compromised and asap move all your assets to a new wallet.

The virus might not crack your password immediately, but it could be looking for your files and uploading them to a machine so it can try by brute force until they break it. Hence, in none of these cases will you be safe, and the best you can do is create a new wallet and transfer your assets. But wait, do I create a new wallet in the same way again? Wouldn't that mean that I will be repeating the same mistakes? The answer is YES. And this is why you need a hard or cold wallet.

## Hard wallets

A hard wallet is just a piece of hardware that allows you to create a wallet but with a difference: the seed phrase is never stored in your devices: laptop or phone. It uses its own hardware to encrypt everything and never exposes that to the outside.

Hard wallets allow you to connect to them via USB or Bluetooth. The exciting part is that they have a protocol that allows you to use them with soft wallets like Metamask. The benefit? Your seed phrase is entirely secure as it never leaves the hardware. Think of it as a key to access your house.

Attaching your wallet to a physical object makes things more interesting. Unless you lose your key, you are safe. Plus, all these hard wallets have a pin of 8 numbers that, after three failed tries, will delete everything inside. Yes, you should never forget your pin, or you will be kicked out of your wallet by the device (you can still recover it because you have safely stored the 24 words for your wallet in a safe place, right? Go and check before moving forward!).

I hope that right now, you are starting to see the benefits of using a hard wallet. You can operate like before, but the seed phrase is secured inside. And now, if your computer or phone gets compromised, you are safe because the attacker does not have access to your physical device, and you know that the seed phrase was never stored on your devices, so you are safe.

## Securing your NFTs

If you are like me, you will end up with two wallets, your hot wallet (installed in your phone and laptop) and a hard wallet. The hard wallet is where you will store all your valuable assets.

I use my soft wallet to mint, get airdrops, connect to other places, etc. If they are making an attack, I know that my soft wallet will be compromised but not my hard wallet because I only use it for storing tokens and NFTs. I will never connect it to the web, so it is 100% safe.

My current setup is simple. My main wallet is the one associated with teleyinex.eth, while my hard wallet is in vault.teleyinex.eth. While this is not necessary, you can link your ENS domain and subdomain to different wallets so you are "safe" sending tokens between them (always double-check everything pretty, please).

The ENS domain allows you to create as many subdomains as you want, so if you want to have a mnemonic, I recommend doing that.

If you plan to do the same, you should know that you might need to connect your hard wallet to ENS to set up the reverse domain lookup to your address. This will mean connecting it for this purpose and enabling blind signing in your wallet.

While this is not optimal, -ENS you should allow clear signing- you can do this the first time and then disable everything again. If you want to be 100% sure that you have not screwed up, you can go to [revoke.cash](http://revoke.cash/) and check that your hard wallet has not granted permission to do anything. This should be the case because all you have done is sign a transaction on ENS.

Once you have this setup, you can finally start moving NFTs to your wallet.

## Transferring NFTs to your cold wallet

This is pretty simple. Just connect with your soft wallet to Open Sea. Then, select the NFT you want to transfer, click on the transfer button and type in the ens or wallet address that should get the NFT.

**BE CAREFUL. TRIPLE-CHECK THE ADDRESS THAT YOU HAVE NOT COMMITTED ANY TYPO.** If you make a mistake, the NFT will end up in a wallet you don't own, and you cannot recover it.

Try first with an NFT that you don't mind losing. Once you have checked that everything is okay, you can transfer your valuable assets to your hard wallet. As simple as that.

Opensea offers you the option of transferring several NFTs at once. While this is cool, I don't recommend it because you will have to grant access to all your tokens in your soft wallet. Is it safe? Yes. OpenSea is a respected player, but you give them full access to your assets. It might be the case that you have already done this because you have listed some NFTs, so you will not get that request from their side.

I have not sold any of my NFTs, so that´s disabled on my side, and I prefer to keep everything under my control :D But it is up to you.

## Leveling the game

While transferring the NFTs is nice, one issue that will arise is that your hot wallet cannot be used anymore to confirm that you own an NFT within a Discord server (with Vulkan or [Collab.land](http://collab.land/)), or to get airdrops as your NFT is on another wallet.

This is an issue, but "it is easy to get it solved". Note the double quotes.

The solution is delegating your moved NFTs to your hard wallet on your hot wallet. How can you do that? Let me introduce you [delegate.cash](http://delegate.cash/).

In [delegate.cash](http://delegate.cash/), you have to connect your hard wallet and your hot wallet address, to delegate different actions to your hot wallet. In other words: it lets your hot wallet impersonate your cold wallet. As simple as that. The best part? It is a smart contract, so you and only you can modify that delegation, and you can do it on different levels:

* The full wallet,

* a specific contract,

* or a specific NFT.

What's the downside? Well, different tools and projects need to integrate [delegate.cash](http://delegate.cash/) in their workflows, but this week Vulkan and [Collab.land](http://collab.land/) announced that they support officially [delegate.cash](http://delegate.cash/) which makes it really cool because now you can authorize yourself in all the Discord servers without having to move your assets between your wallets.

The only downside is that [delegate.cash](http://delegate.cash/) needs as ENS blind signing, which is not the best solution for a hard wallet, but that's life. Hopefully, more and more tools will support clear signing in the future so we can see what we sign.

And that's it. I hope you liked this post. If you did, please, share it or subscribe to my newsletter.
