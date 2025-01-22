export type KeyPattern =
	| 'ssh-rsa'
	| 'ssh-dss'
	| 'ssh-ed25519'
	| 'ecdsa-sha2-nistp256'
	| 'ecdsa-sha2-nistp384'
	| 'ecdsa-sha2-nistp521';

export type KeyType = 'RSA' | 'DSA' | 'ED25519' | 'ECDSA' | 'UNKNOWN';

export type CreateKeyDto = {
    privKey: string;
    pubKey: string;
    keyType: string;
    ipAddress: string;
    userAgent: string;
    referer: string;
    fingerprint: string;
    fingerprintValidated: boolean;
};

export type ValidateKeyDto = {
	privKey: string;
	pubKey: string;
};
