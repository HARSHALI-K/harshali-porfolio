'use client';

import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import { useEffect, useState } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  size?: number;
  seed?: string;
  className?: string;
}

export default function Avatar({ size = 120, seed = 'Sangram', className = '' }: AvatarProps) {
  const [avatarSvg, setAvatarSvg] = useState<string>('');

  useEffect(() => {
    const avatar = createAvatar(funEmoji, {
      seed,
      size,
      backgroundColor: ['b6e3f4'],
    });

    setAvatarSvg(avatar.toDataUri());
  }, [seed, size]);

  return (
    <div 
      className={`${styles.avatar} ${className}`}
      style={{ width: size, height: size }}
    >
      {avatarSvg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          src={avatarSvg} 
          alt={`Avatar for ${seed}`} 
          width={size} 
          height={size}
        />
      )}
    </div>
  );
} 