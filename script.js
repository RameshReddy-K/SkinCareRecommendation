const featuresInfo = {
    'Normal': {
      description: 'Normal skin is well-balanced, characterized by optimal oil production and moisture levels. This skin type typically has small, barely visible pores, good blood circulation, and a smooth, even texture without visible blemishes. The skin feels neither too dry nor too oily, maintains consistent hydration throughout the day, and rarely experiences sensitivity or breakouts. People with normal skin often have a healthy, radiant complexion that requires minimal maintenance.',
      image: 'https://i.pinimg.com/736x/ab/cd/d3/abcdd33a516eafd1478a5778070cc261.jpg'
    },
    'Dry': {
      description: 'Dry skin occurs when the skin produces insufficient natural oils (sebum) and has a compromised moisture barrier. This condition can lead to uncomfortable tightness, flaking, itching, and visible fine lines. The skin may feel rough, appear dull, and show signs of premature aging. Environmental factors like cold weather, low humidity, hot showers, and harsh soaps can exacerbate dryness. People with dry skin often experience increased sensitivity and may notice more pronounced facial expressions lines due to the skin\'s lack of elasticity.',
      image: 'https://i.pinimg.com/736x/86/8d/a4/868da4e3d4009701d1fd301bfb515ae1.jpg'
    },
    'Oily': {
      description: 'Oily skin is characterized by excessive sebum production from overactive sebaceous glands, often due to hormonal changes, genetics, or environmental factors. This skin type typically has enlarged, visible pores and a persistent shiny or greasy appearance, particularly in the T-zone (forehead, nose, and chin). While oily skin can be more prone to acne, blackheads, and breakouts, it also has natural protection against wrinkles and maintains better hydration. The excess oil can trap debris and dead skin cells, leading to clogged pores and inflammation if not properly managed.',
      image: 'https://i.pinimg.com/736x/c0/e8/de/c0e8de0b089803ecc730c3f8a3a96539.jpg'
    },
    'Combination': {
      description: 'Combination skin presents a unique challenge as it features two or more different skin types on the face. Typically, the T-zone (forehead, nose, and chin) is oily with enlarged pores, while the cheeks and other areas are normal to dry. This skin type can vary seasonally and requires a balanced approach to skincare. The oily areas may be prone to breakouts and shine, while the dry areas might experience flaking and tightness. Finding products that address both concerns without aggravating either condition is key to managing combination skin effectively.',
      image: 'https://i.pinimg.com/736x/cf/37/d3/cf37d302764ae88efc5668db6bbd1f9c.jpg'
    },
    'Acne': {
      description: 'Acne is a complex inflammatory skin condition that occurs when hair follicles become clogged with oil, dead skin cells, and bacteria. It can manifest in various forms including papules (red bumps), pustules (whiteheads), nodules (deep, painful bumps), and cysts. Hormonal changes, genetics, diet, stress, and certain medications can trigger or worsen acne. The condition not only affects the skin\'s appearance but can also lead to scarring and significant emotional impact. Professional treatment may be necessary for severe cases, while mild to moderate acne often responds well to proper skincare and over-the-counter treatments.',
      image: 'https://i.pinimg.com/736x/6b/8d/d9/6b8dd9392b032bddcded8c041269edf1.jpg'
    },
    'Sensitive': {
      description: 'Sensitive skin is highly reactive to environmental factors, skincare products, and external stressors. This skin type often experiences redness, burning, itching, or stinging sensations in response to certain triggers. The sensitivity can be caused by a compromised skin barrier, underlying skin conditions, allergies, or genetic predisposition. People with sensitive skin may notice immediate reactions to new products, weather changes, or even emotional stress. The skin might also show visible signs of irritation such as rashes, hives, or broken capillaries. Gentle, fragrance-free products and a minimalist skincare approach are typically recommended.',
      image: 'https://i.pinimg.com/736x/0a/fa/5c/0afa5cac36466bae8c7ac275eb29a2e1.jpg'
    },
    'Fine Lines': {
      description: 'Fine lines are the initial signs of skin aging, appearing as subtle creases that form primarily in areas of frequent facial movement, such as around the eyes (crow\'s feet), mouth (smile lines), and forehead. These lines are caused by a combination of factors including repeated facial expressions, sun damage, loss of collagen and elastin, and natural aging processes. Initially, fine lines may only be visible when the face is moving or in certain lighting, but they can deepen over time without proper care. Prevention through sun protection, hydration, and early intervention with appropriate skincare is key to managing fine lines.',
      image: 'https://i.pinimg.com/736x/3f/07/ba/3f07ba3d6e0a0bb84090664d93e657cb.jpg'
    },
    'Wrinkles': {
      description: 'Wrinkles are deeper creases in the skin that develop as a natural part of aging, though their appearance can be accelerated by various factors. They occur due to the gradual loss of collagen, elastin, and hyaluronic acid in the skin, combined with years of facial movements, sun exposure, and environmental damage. Wrinkles can be categorized as dynamic (appearing with facial movements) or static (visible even when the face is at rest). Common areas include the forehead, around the eyes, nasolabial folds, and neck. Lifestyle factors such as smoking, poor nutrition, and inadequate sun protection can significantly impact wrinkle formation.',
      image: 'https://i.pinimg.com/736x/e1/69/51/e169518a12a35cb22b1ac06a028a5a30.jpg'
    },
    'Redness': {
      description: 'Facial redness, or erythema, can be a chronic or temporary condition characterized by flushing, visible blood vessels, and general skin inflammation. It can be triggered by various factors including temperature changes, spicy foods, alcohol, exercise, emotional stress, or underlying skin conditions like rosacea. Chronic redness might indicate compromised blood vessels, sensitivity, or inflammatory skin conditions. The affected areas commonly include the cheeks, nose, chin, and forehead. Some people may experience accompanying symptoms such as burning, stinging, or increased sensitivity to skincare products.',
      image: 'https://i.pinimg.com/736x/67/93/b0/6793b07851906b652122fa33934aa96c.jpg'
    },
    'Dull': {
      description: 'Dull skin lacks the natural radiance and vitality associated with healthy skin, appearing tired, lackluster, and sometimes grayish in tone. This condition often results from a buildup of dead skin cells, poor circulation, dehydration, or lifestyle factors such as lack of sleep, stress, and poor nutrition. Environmental pollutants, smoking, and inadequate skincare can also contribute to skin dullness. The skin\'s natural cell turnover process may be sluggish, leading to an uneven texture and reduced light reflection. This can make the complexion appear flat and lifeless, aging the appearance of the skin.',
      image: 'https://i.pinimg.com/736x/44/e3/58/44e35835f37881d7ed13d72939489152.jpg'
    },
    'Pore': {
      description: 'Pores are tiny openings in the skin that allow for sebum secretion and hair growth. When these openings become noticeable, they\'re often referred to as "enlarged pores." This condition is typically more prominent in oily or combination skin types and can be influenced by genetics, age, sun damage, and improper skincare. Enlarged pores can appear more visible due to excess oil production, accumulated dead skin cells, or loss of skin elasticity. They\'re most commonly found in the T-zone area and can become more pronounced with age as the skin loses collagen and elasticity.',
      image: 'https://i.pinimg.com/736x/08/d2/f7/08d2f71d155c42b11c7db484a9ed8bdf.jpg'
    },
    'Pigmentation': {
      description: 'Skin pigmentation refers to areas of uneven coloring or darkening caused by irregular melanin production. This can manifest as sun spots, age spots, melasma (hormone-related patches), or post-inflammatory hyperpigmentation from acne or injury. Various factors can trigger excess melanin production, including UV exposure, hormonal changes, inflammation, and certain medications. The patches can vary in size, shape, and intensity, and may appear on any part of the body, though they\'re most noticeable on the face. Some forms of pigmentation can be particularly stubborn and may require a combination of treatments for improvement.',
      image: 'https://i.pinimg.com/736x/55/a6/d3/55a6d351aab3af16dc949695cf5b53fa.jpg'
    },
    'Blackheads': {
      description: 'Blackheads are a type of non-inflammatory acne that occurs when pores become clogged with excess oil, dead skin cells, and bacteria. Unlike whiteheads, the top of the pore remains open, allowing the contents to oxidize and turn dark, giving them their characteristic black appearance. They\'re most common in oily areas of the face, particularly the T-zone, but can occur anywhere. While not inflamed like other types of acne, blackheads can be persistent and may lead to enlarged pores if left untreated. Regular, gentle exfoliation and proper oil control are key to managing blackheads.',
      image: 'https://i.pinimg.com/736x/99/39/8e/99398ec9902414cbd2dee1faa297f17c.jpg'
    },
    'Whiteheads': {
      description: 'Whiteheads, also known as closed comedones, are small, flesh-colored bumps that occur when pores become clogged with oil, dead skin cells, and bacteria, but unlike blackheads, the pore opening is closed. This prevents oxidation of the contents, maintaining their white or flesh-colored appearance. They\'re commonly found in oily areas of the face and can be caused by hormonal changes, certain skincare products, or improper cleansing. While tempting to squeeze, this can lead to inflammation, infection, and scarring. Proper exfoliation and non-comedogenic products are essential for prevention.',
      image: 'https://i.pinimg.com/736x/82/4b/59/824b597b7f07036ce0340e6f53d90ed1.jpg'
    },
    'Blemishes': {
      description: 'Blemishes encompass various types of skin imperfections including acne, dark spots, scars, and uneven texture. They can be temporary or long-lasting and may result from various factors including hormonal changes, inflammation, sun damage, or skin injuries. Different types of blemishes require different treatment approaches - some may respond well to over-the-counter treatments, while others might need professional intervention. The psychological impact of blemishes can be significant, affecting self-esteem and social confidence. A comprehensive skincare routine and proper sun protection are essential for prevention and management.',
      image: 'https://i.pinimg.com/736x/e5/2c/91/e52c9186e57655b5f8942312fef81c97.jpg'
    },
    'Dark Circles': {
      description: 'Dark circles under the eyes can be caused by various factors including genetics, aging, lack of sleep, dehydration, and lifestyle habits. The appearance of darkness is often due to visible blood vessels showing through the thin skin under the eyes, or shadows cast by puffy eyelids. Some people may have naturally deeper-set eyes or loss of volume in the tear trough area, creating shadows. Factors like allergies, sinus problems, and excessive screen time can worsen their appearance. While concealer can provide temporary coverage, addressing the underlying causes and maintaining good sleep hygiene are important for long-term improvement.',
      image: 'https://i.pinimg.com/736x/cd/ec/75/cdec75817a194c439e507c2d7fb1b204.jpg'
    },
    'Eye Bags': {
      description: 'Eye bags are characterized by puffiness or swelling under the eyes, often giving a tired or aged appearance. They can be temporary, caused by fluid retention due to lack of sleep, excessive salt intake, or allergies, or permanent, resulting from natural aging processes and loss of skin elasticity. The fat pads under the eyes may also become more prominent with age as supporting tissues weaken. Genetics play a significant role in their development, and certain lifestyle factors like smoking or excessive alcohol consumption can worsen their appearance. While temporary puffiness can be reduced with lifestyle changes, permanent eye bags may require professional treatment.',
      image: 'https://i.pinimg.com/736x/2e/da/f1/2edaf1750dab5b02ae0108c7b7400784.jpg'
    },
    'Dark Spots': {
      description: 'Dark spots, or hyperpigmentation, are areas of skin that appear darker than the surrounding area due to excess melanin production. They can be triggered by sun exposure, hormonal changes (melasma), post-inflammatory hyperpigmentation from acne or injury, or aging (age spots). The spots can vary in size and color intensity, and may appear on any part of the body exposed to sun. While some dark spots fade naturally over time, others may be more persistent. Prevention through proper sun protection is crucial, as UV exposure can both cause new spots and darken existing ones. Treatment options range from topical brightening agents to professional procedures.',
      image: 'https://i.pinimg.com/736x/38/5c/80/385c80956b6f56837e376e14d5e81c2c.jpg'
    }
    // Add other features similarly
};

const tonesInfo = {
    'Light to Medium': {
      description: 'Light to medium skin tones typically have a warm or neutral undertone and fall in the middle range of the skin color spectrum. This skin type may tan gradually with sun exposure but can also burn easily. People with this complexion often have visible veins, particularly around delicate areas like the eyes and wrists. They may experience occasional redness or flushing, and sun damage can appear as freckles or sunspots. Proper sun protection is crucial as this skin tone can be susceptible to both immediate and long-term UV damage. Hyperpigmentation and uneven skin tone are common concerns that require careful management.',
      image: 'https://i.pinimg.com/736x/20/a1/23/20a12357116e642d2f10ddcce673eda1.jpg'
    },
    'Medium to Dark': {
      description: 'Medium to dark skin tones possess naturally higher levels of melanin, providing some inherent sun protection. These complexions often have warm, golden, or olive undertones and can range from honey to deep bronze shades. While this skin type tans easily and rarely burns, it still requires sun protection to prevent hyperpigmentation and uneven skin tone. Post-inflammatory hyperpigmentation can be a significant concern, as any inflammation or injury may leave lasting dark marks. The skin may also be prone to ashiness if not properly moisturized. Despite having natural UV protection, regular sunscreen use is essential for preventing long-term damage and maintaining even skin tone.',
      image: 'https://i.pinimg.com/736x/19/8e/42/198e42d542520e7104fb71610e54316c.jpg'
    },
    'Fair to Light': {
      description: 'Fair to light skin tones have minimal melanin and typically feature pink, red, or blue undertones. This skin type is highly susceptible to sun damage and burns easily due to low natural UV protection. People with fair skin often experience high sensitivity and may react quickly to environmental factors, skincare products, or temperature changes. Redness, flushing, and visible capillaries are common concerns. Sun protection is absolutely crucial, as this skin type is at the highest risk for sun damage and skin cancer. Freckles and signs of photoaging may appear earlier than in darker skin tones if not properly protected.',
      image: 'https://i.pinimg.com/736x/dd/61/4d/dd614d781980a3055a87c914e0e1ce41.jpg'
    },
    'Dark to Deep': {
      description: 'Dark to deep skin tones have the highest concentration of melanin, providing significant natural protection against UV radiation. These rich complexions can range from deep brown to ebony and typically have warm or neutral undertones. While this skin type rarely burns, it can still experience sun damage and hyperpigmentation. The high melanin content means any inflammation or injury may result in more noticeable post-inflammatory hyperpigmentation. Keloid scarring may also be more common. Despite having natural sun protection, daily sunscreen use remains important for preventing uneven skin tone and maintaining overall skin health. This skin type may also be prone to ashiness and requires regular moisturization to maintain its natural glow.',
      image: 'https://i.pinimg.com/736x/e2/01/85/e2018507dc6580bb0ad323132c143b0d.jpg'
    }
    // Add other tones similarly
};

const typesInfo = {
    'All': {
      description: 'This category encompasses skincare advice and products that are suitable for all skin types. These universal recommendations focus on the fundamental aspects of skin health that benefit everyone, regardless of their specific skin type. This includes proper cleansing techniques, adequate hydration, sun protection, and basic nutrition for skin health. Products in this category are typically gentle, non-irritating, and balanced in their formulation to avoid triggering sensitivities while providing essential care. Understanding these universal principles forms the foundation of any effective skincare routine.',
      image: 'https://i.pinimg.com/736x/0c/2e/1d/0c2e1d6e33b40a73ea73f0c35302fd63.jpg'
    },
    'Normal': {
      description: 'Normal skin is characterized by a well-balanced production of sebum and moisture, resulting in a healthy, radiant complexion. This skin type maintains good hydration levels throughout the day and has minimal sensitivity. The pores are typically small and barely visible, and the skin texture is smooth and even. While this skin type is the least problematic, it still requires proper care to maintain its balance. Environmental factors, stress, and aging can impact its condition, making consistent skincare and protection important for long-term health.',
      image: 'https://i.pinimg.com/736x/ab/cd/d3/abcdd33a516eafd1478a5778070cc261.jpg'
    },
    'Oily': {
      description: 'Oily skin is characterized by excessive sebum production from overactive sebaceous glands, often influenced by hormones, genetics, and environmental factors. This skin type typically has enlarged, visible pores, especially in the T-zone area, and may have a persistent shiny or greasy appearance. While more prone to acne and congestion, oily skin often ages more slowly due to natural moisture retention. The excess oil can lead to clogged pores, blackheads, and breakouts if not properly managed. However, stripping the skin of oils can trigger even more oil production, making balanced, non-comedogenic skincare essential.',
      image: 'https://i.pinimg.com/736x/c0/e8/de/c0e8de0b089803ecc730c3f8a3a96539.jpg'
    },
    'Combination': {
      description: 'Combination skin features two or more different skin types on the face, typically presenting as an oily T-zone (forehead, nose, and chin) with normal to dry cheeks and outer areas. This skin type can be challenging to manage as it requires different care approaches for different facial zones. The oily areas may be prone to enlarged pores, blackheads, and shine, while the dry areas might experience tightness, flaking, or sensitivity. Seasonal changes can affect the balance between oily and dry areas, requiring adjustments in skincare routine. Finding products that address both concerns without aggravating either condition is key to managing combination skin effectively.',
      image: 'https://i.pinimg.com/736x/cf/37/d3/cf37d302764ae88efc5668db6bbd1f9c.jpg'
    },
    'Dry': {
      description: 'Dry skin produces less sebum than normal skin, resulting in a compromised moisture barrier and reduced natural protection. This skin type often experiences tightness, flaking, and discomfort, particularly after cleansing or in low-humidity environments. The lack of adequate natural oils can lead to premature aging, increased sensitivity, and a dull, rough texture. Environmental factors like cold weather, indoor heating, and hot water can exacerbate dryness. The skin may show more pronounced fine lines due to dehydration and may be more susceptible to irritation and environmental damage. Proper moisturization, gentle cleansing, and protection from environmental stressors are essential for maintaining healthy dry skin.',
      image: 'https://i.pinimg.com/736x/86/8d/a4/868da4e3d4009701d1fd301bfb515ae1.jpg'
    }
    // Add other types similarly
};

function renderGrid(data, containerId) {
    const container = document.getElementById(containerId);
    for (const [key, value] of Object.entries(data)) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <img src="${value.image}" alt="${key}" />
            <p>${value.description}</p>
        `;
        container.appendChild(item);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderGrid(featuresInfo, 'features-grid');
    renderGrid(tonesInfo, 'tones-grid');
    renderGrid(typesInfo, 'types-grid');
});

function navigateHome() {
    window.location.href = '/';
}

function openRecommendations() {
    window.open('https://uchithk130.github.io/product_Recommend/', '_blank');
}
