import React from 'react';
import { Instagram, Youtube, Cake } from 'lucide-react';
import { COLORS } from '../constants/theme';

const SocialMediaSection = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/aimers_academy.education?igsh=M3BtN2E5NWd6emo5',
            color: '#ff0000',
            color2: '#0000ffbe',
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://youtube.com/@aimers_academy.0?si=ig5VOKgUlWaWwbFL',
            color: '#FF0000',
            color2: '#FF0000',
        },
    ];

    return (
        <section style={{
            padding: '80px 24px',
            backgroundColor: COLORS.lightGray,
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '80px',
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        color: COLORS.darkGray,
                    }}>
                        Follow Us
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: COLORS.mediumGray,
                    }}>
                        Connect with us on social media for updates, tips, and student success stories
                    </p>
                </div>

                {/* Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center',
                }}>
                    {/* Left Side - Social Links */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '50px',
                    }}>
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '15px',
                                        textDecoration: 'none',
                                        transition: 'transform 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <div style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${social.color}, ${social.color2})`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                                    }}
                                    >
                                        <Icon size={50} color="white" strokeWidth={1.5} />
                                    </div>
                                    <span style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: social.color,
                                    }}>
                                        {social.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Side - Phone Mockup */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            position: 'relative',
                        }}>
                            {/* Glow behind phone */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                                borderRadius: '3.5rem',
                                filter: 'blur(40px)',
                                transform: 'scale(1.2)',
                            }} />

                            {/* Phone shell */}
                            <div style={{
                                position: 'relative',
                                width: '280px',
                                backgroundColor: '#0f172a',
                                borderRadius: '2.8rem',
                                padding: '12px',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                            }}>
                                {/* Top notch */}
                                <div style={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '96px',
                                    height: '24px',
                                    backgroundColor: '#0f172a',
                                    borderRadius: '9999px',
                                    zIndex: 10,
                                }} />

                                {/* Screen */}
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '2.3rem',
                                    overflow: 'hidden',
                                    height: '540px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>

                                    {/* Instagram top bar */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '12px 16px 8px 16px',
                                        borderBottom: '1px solid #e5e7eb',
                                    }}>
                                        <span style={{
                                            fontSize: '14px',
                                            color: '#111827',
                                            fontWeight: '600',
                                            fontFamily: 'cursive',
                                        }}>aimers_academy.education</span>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <div style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                backgroundColor: '#d1d5db',
                                            }} />
                                            <div style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                backgroundColor: '#d1d5db',
                                            }} />
                                        </div>
                                    </div>

                                    {/* Profile info */}
                                    <div style={{
                                        padding: '12px 16px',
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            marginBottom: '12px',
                                        }}>
                                            {/* Avatar */}
                                            <div style={{
                                                width: '64px',
                                                height: '64px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                background: 'linear-gradient(135deg, #f97316, #ec4899)',
                                            }}>
                                                <Cake size={32} color="white" />
                                            </div>
                                            {/* Stats */}
                                            <div style={{
                                                display: 'flex',
                                                gap: '16px',
                                                flex: 1,
                                                justifyContent: 'space-around',
                                                textAlign: 'center',
                                            }}>
                                                <div>
                                                    <p style={{
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        color: '#111827',
                                                        margin: 0,
                                                    }}>348</p>
                                                    <p style={{
                                                        fontSize: '10px',
                                                        color: '#4b5563',
                                                        margin: '2px 0 0 0',
                                                    }}>posts</p>
                                                </div>
                                                <div>
                                                    <p style={{
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        color: '#111827',
                                                        margin: 0,
                                                    }}>12.4K</p>
                                                    <p style={{
                                                        fontSize: '10px',
                                                        color: '#4b5563',
                                                        margin: '2px 0 0 0',
                                                    }}>followers</p>
                                                </div>
                                                <div>
                                                    <p style={{
                                                        fontSize: '14px',
                                                        fontWeight: 'bold',
                                                        color: '#111827',
                                                        margin: 0,
                                                    }}>219</p>
                                                    <p style={{
                                                        fontSize: '10px',
                                                        color: '#4b5563',
                                                        margin: '2px 0 0 0',
                                                    }}>following</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Name & bio */}
                                        <p style={{
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            color: '#111827',
                                            margin: '8px 0 4px 0',
                                        }}>Aimers Academy 🎓</p>
                                        <p style={{
                                            fontSize: '9px',
                                            color: '#6b7280',
                                            lineHeight: '1.4',
                                            margin: 0,
                                        }}>Quality Education at Your Fingertips ✨</p>
                                        <p style={{
                                            fontSize: '9px',
                                            color: '#6b7280',
                                            lineHeight: '1.4',
                                            margin: '2px 0 0 0',
                                        }}>Courses • Mentorship • Success 🚀</p>

                                        {/* Follow button */}
                                        <a
                                            href="https://www.instagram.com/aimers_academy.education?igsh=M3BtN2E5NWd6emo5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'block',
                                                marginTop: '12px',
                                                width: '100%',
                                                padding: '12px 0',
                                                borderRadius: '8px',
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                color: 'white',
                                                background: 'linear-gradient(135deg, #f97316, #ec4899)',
                                                textAlign: 'center',
                                                textDecoration: 'none',
                                                transition: 'transform 0.2s ease',
                                                cursor: 'pointer',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.02)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            Follow
                                        </a>
                                    </div>

                                    {/* Photo grid */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '1px',
                                        padding: '4px 0',
                                        flex: 1,
                                        overflow: 'hidden',
                                    }}>
                                        {[
                                            '/images/cakes/cake-1.jpg',
                                            '/images/cakes/cake-2.jpg',
                                            '/images/cakes/cake-3.jpg',
                                            '/images/cakes/cake-6.jpg',
                                            '/images/cakes/cake-7.jpg',
                                            '/images/cakes/cake-8.jpg',
                                            '/images/hero/hero-cake-1.jpg',
                                            '/images/hero/hero-cake-3.jpg',
                                            '/images/cakes/cake-4.jpg',
                                        ].map((src, i) => (
                                            <div key={i} style={{
                                                aspectRatio: '1',
                                                overflow: 'hidden',
                                                backgroundColor: '#f3f4f6',
                                            }}>
                                                <img src={src} alt="post" style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease',
                                                }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Home bar */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '12px',
                                    paddingBottom: '4px',
                                }}>
                                    <div style={{
                                        width: '96px',
                                        height: '6px',
                                        backgroundColor: '#374151',
                                        borderRadius: '9999px',
                                    }} />
                                </div>
                            </div>

                            {/* Floating badge - New post */}
                            <div style={{
                                position: 'absolute',
                                top: '-24px',
                                right: '-24px',
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                                padding: '8px 12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}>
                                <div style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(135deg, #f97316, #ec4899)',
                                }}>
                                    <Instagram size={16} color="white" />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: '11px',
                                        fontWeight: 'bold',
                                        color: '#111827',
                                        margin: 0,
                                    }}>New post!</p>
                                    <p style={{
                                        fontSize: '9px',
                                        color: '#6b7280',
                                        margin: 0,
                                    }}>2 mins ago</p>
                                </div>
                            </div>

                            {/* Floating hearts */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-24px',
                                left: '-32px',
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                                padding: '8px 16px',
                            }}>
                                <p style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: '#111827',
                                    margin: 0,
                                }}>❤️ 1,248 likes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;
