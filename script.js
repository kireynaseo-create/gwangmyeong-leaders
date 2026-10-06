/**
 * 광명리더스 공인중개사사무소 - Interactive Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. SAMPLE REAL ESTATE DATA (광명시 실매물 8선) =================
  const propertiesData = [
    {
      id: 1,
      title: "철산래미안자이 84㎡ (33평형) 로얄동 남향 햇살가득",
      category: "아파트",
      transType: "매매",
      priceDisplay: "10억 8,000만원",
      priceNum: 108000,
      district: "철산동",
      location: "경기도 광명시 철산동 (7호선 철산역 도보 5분)",
      area: "공급 112㎡ / 전용 84㎡",
      specs: "방 3개 · 욕실 2개 · 18/25층 · 남향",
      tags: ["급매", "역세권", "올확장", "로얄층"],
      image: "assets/images/apt_cheolsan.jpg",
      fallbackImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      description: "철산역 초역세권 대단지 프리미엄 아파트입니다. 주인 직접 거주로 상태 최상이며 올확장 및 중문 시공 완료되어 탄탄한 구조를 자랑합니다.",
      maintenanceFee: "약 22만원",
      parking: "세대당 1.4대 (지하주차장 직통)",
      moveInDate: "즉시입주 가능 (협의 가능)"
    },
    {
      id: 2,
      title: "유플래닛 광명데시앙 102㎡ (40평형) 초고층 안양천 파노라마뷰",
      category: "아파트",
      transType: "전세",
      priceDisplay: "7억 5,000만원",
      priceNum: 75000,
      district: "일직동",
      location: "경기도 광명시 일직동 (KTX 광명역 도보 3분)",
      area: "공급 132㎡ / 전용 102㎡",
      specs: "방 4개 · 욕실 2개 · 32/49층 · 남동향",
      tags: ["KTX역세권", "신축급", "뷰맛집", "대형평형"],
      image: "assets/images/hero_bg.jpg",
      fallbackImg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      description: "KTX 광명역, 코스트코, 이케아, 중앙대병원을 도보로 이용할 수 있는 일직동 최고 입지! 탁 트인 막힘없는 안양천 조망권을 선사합니다.",
      maintenanceFee: "약 28만원",
      parking: "세대당 1.6대",
      moveInDate: "2026년 11월 중순 협의"
    },
    {
      id: 3,
      title: "광명뉴타운 11구역 조합원 입주권 (전용 84㎡ 확정배정)",
      category: "재개발/입주권",
      transType: "매매",
      priceDisplay: "매매 6억 2,000만원 (프리미엄 2억 8천 포함)",
      priceNum: 62000,
      district: "광명동",
      location: "경기도 광명시 광명동 (7호선 광명사거리역 인근)",
      area: "전용 84A 타입 배정완료",
      specs: "대단지 4,200세대 랜드마크 예정 · 조합원 혜택 최상",
      tags: ["재개발", "조합원입주권", "초역세권", "미래가치"],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      fallbackImg: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      description: "광명뉴타운 대장주 11구역 입주권 매물입니다. 이주 완료 단계로 시공사 대우건설/현대건설 컨소시엄 프리미엄 브랜드 단지로 재탄생합니다.",
      maintenanceFee: "해당 없음",
      parking: "신축 지하 100% 주차",
      moveInDate: "준공 후 입주"
    },
    {
      id: 4,
      title: "하안주공 12단지 59㎡ (24평형) 올수리 갭투자 추천",
      category: "아파트",
      transType: "매매",
      priceDisplay: "5억 3,000만원 (전세 3억 안고 매수)",
      priceNum: 53000,
      district: "하안동",
      location: "경기도 광명시 하안동 (하안사거리 상권 인근)",
      area: "공급 79㎡ / 전용 59㎡",
      specs: "방 2개 · 욕실 1개 · 8/15층 · 남향",
      tags: ["급매", "재건축유망", "올수리", "소액투자"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      fallbackImg: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      description: "재건축 정밀안단통과 추진 단지! 최근 샷시 포함 전체 올수리되어 깔끔한 임차인이 거주 중인 소액 갭투자 최적 매물입니다.",
      maintenanceFee: "약 14만원",
      parking: "단지 내 지상/지하 주차",
      moveInDate: "임대차 승계 (투자용)"
    },
    {
      id: 5,
      title: "소하동 신촌휴먼시아 84㎡ (33평형) 쾌적한 구름산 숲세권",
      category: "아파트",
      transType: "월세",
      priceDisplay: "보증금 1억원 / 월세 140만원",
      priceNum: 10000,
      district: "소하동",
      location: "경기도 광명시 소하동 (소하초·중·고 도보 3분)",
      area: "공급 110㎡ / 전용 84㎡",
      specs: "방 3개 · 욕실 2개 · 12/18층 · 남동향",
      tags: ["숲세권", "초품아", "시스템에어컨", "쾌적"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      fallbackImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "구름산 자락 산책로와 연결되어 공기 쾌적하고 조용한 단지! 시스템에어컨 4대 풀옵션 설치되어 아이 키우기 최고인 아파트입니다.",
      maintenanceFee: "약 20만원",
      parking: "세대당 1.3대",
      moveInDate: "즉시입주 가능"
    },
    {
      id: 6,
      title: "광명역 자이타워 코너변 1층 15평 전면 로드 상가",
      category: "상가/사무실",
      transType: "월세",
      priceDisplay: "보증금 5,000만원 / 월세 280만원",
      priceNum: 5000,
      district: "일직동",
      location: "경기도 광명시 일직동 (지식산업센터 1층 스트리트몰)",
      area: "전용면적 49.5㎡ (15평)",
      specs: "1층 전면 노출성 우수 · 층고 4.5m 높은 쾌적함",
      tags: ["역세권상가", "추천업종카페", "유동인구풍부", "무권리"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      fallbackImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "상주인구 5,000여 명의 자이타워 1층 메인 동선 코너 상가입니다. 카페, 베이커리, 프랜차이즈, 사무실 등 강력 추천합니다.",
      maintenanceFee: "실비 정산",
      parking: "고객 무제한 주차 가능",
      moveInDate: "즉시 입주 및 인테리어 가능"
    },
    {
      id: 7,
      title: "철산 센트럴푸르지오 59㎡ (25평형) 초역세권 신축급 전세",
      category: "아파트",
      transType: "전세",
      priceDisplay: "5억 8,000만원",
      priceNum: 58000,
      district: "철산동",
      location: "경기도 광명시 철산동 (7호선 철산역 2번출구 2분)",
      area: "공급 81㎡ / 전용 59㎡",
      specs: "방 3개 · 욕실 2개 · 20/29층 · 남서향",
      tags: ["신축", "초역세권", "풀옵션", "안심전세"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      fallbackImg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      description: "철산역 도보 2분 최신축 단지! 융자 없는 안전한 1순위 안심 전세 매물이며 전세자금대출 적극 협조해 드립니다.",
      maintenanceFee: "약 16만원",
      parking: "세대당 1.35대",
      moveInDate: "2026년 12월 이내 지정입주"
    },
    {
      id: 8,
      title: "광명역 클래시아 오피스텔 전용 24㎡ (7.5평) 복층형",
      category: "오피스텔",
      transType: "월세",
      priceDisplay: "보증금 1,000만원 / 월세 65만원",
      priceNum: 1000,
      district: "일직동",
      location: "경기도 광명시 일직동 (광명역 도보 4분)",
      area: "전용 24㎡ + 서비스 복층 8㎡",
      specs: "풀옵션 (세탁기, 냉장고, 에어컨, 인덕션, 수납장)",
      tags: ["풀옵션", "복층구조", "주차편리", "직주근접"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      fallbackImg: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      description: "복층 구조로 공간 활용도 극대화! 1인 가구 및 광명역 직장인 강추 매물입니다. 지하주차장 넓고 보안 철저합니다.",
      maintenanceFee: "약 8만원",
      parking: "1대 지정주차",
      moveInDate: "즉시입주 가능"
    }
  ];

  // Global State
  let currentFilters = {
    transType: 'all',
    district: 'all',
    propType: 'all',
    price: 'all',
    keyword: '',
    categoryBtn: 'all'
  };

  let favoriteIds = JSON.parse(localStorage.getItem('gwangmyeong_favs') || '[]');

  // ================= 2. DOM ELEMENTS =================
  const propertyGrid = document.getElementById('property-grid');
  const noPropMsg = document.getElementById('no-properties-msg');
  
  // Counter elements
  const countAll = document.getElementById('count-all');
  const countApt = document.getElementById('count-apt');
  const countRedev = document.getElementById('count-redev');
  const countComm = document.getElementById('count-comm');
  const countOfficetel = document.getElementById('count-officetel');

  // Filter elements
  const transTabs = document.querySelectorAll('#transaction-tabs .tab-btn');
  const selectDistrict = document.getElementById('filter-district');
  const selectPropType = document.getElementById('filter-property-type');
  const selectPrice = document.getElementById('filter-price');
  const inputKeyword = document.getElementById('filter-keyword');
  const btnSearchSubmit = document.getElementById('search-submit-btn');
  const quickTagBtns = document.querySelectorAll('.quick-tag-btn');
  const categoryBtns = document.querySelectorAll('.prop-filter-btn');
  const resetSearchBtn = document.getElementById('reset-search-btn');

  // Modal elements
  const modalOverlay = document.getElementById('property-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body-content');

  // Mobile drawer elements
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Calculators elements
  const calcPropType = document.getElementById('calc-prop-type');
  const calcPrice = document.getElementById('calc-price');
  const calcRent = document.getElementById('calc-rent');
  const groupCalcRent = document.getElementById('group-calc-rent');
  const labelCalcPrice = document.getElementById('label-calc-price');
  const btnCalcFee = document.getElementById('btn-calculate-fee');
  const calcResultBox = document.getElementById('calc-result-box');
  const resRate = document.getElementById('res-rate');
  const resMaxFee = document.getElementById('res-max-fee');

  const loanHouseStatus = document.getElementById('loan-house-status');
  const loanHousePrice = document.getElementById('loan-house-price');
  const btnCalcLoan = document.getElementById('btn-calculate-loan');
  const loanResultBox = document.getElementById('loan-result-box');
  const resLoanLtv = document.getElementById('res-loan-ltv');
  const resLoanAmount = document.getElementById('res-loan-amount');

  // Consultation form
  const consultForm = document.getElementById('consultation-form');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');

  // Bookmark page btn
  const bookmarkBtn = document.getElementById('bookmark-page-btn');

  // ================= 3. RENDER PROPERTY CARDS =================
  function renderProperties() {
    // Filter array based on state
    const filtered = propertiesData.filter(item => {
      // 1. Trans Type (매매, 전세, 월세)
      if (currentFilters.transType !== 'all' && item.transType !== currentFilters.transType) {
        return false;
      }
      // 2. Category Tab
      if (currentFilters.categoryBtn !== 'all' && item.category !== currentFilters.categoryBtn) {
        return false;
      }
      // 3. District
      if (currentFilters.district !== 'all' && !item.district.includes(currentFilters.district)) {
        return false;
      }
      // 4. Property Type Select
      if (currentFilters.propType !== 'all' && item.category !== currentFilters.propType) {
        return false;
      }
      // 5. Price Range
      if (currentFilters.price !== 'all') {
        const val = item.priceNum;
        if (currentFilters.price === 'under5' && val > 50000) return false;
        if (currentFilters.price === '5to10' && (val < 50000 || val > 100000)) return false;
        if (currentFilters.price === '10to15' && (val < 100000 || val > 150000)) return false;
        if (currentFilters.price === 'over15' && val < 150000) return false;
      }
      // 6. Keyword
      if (currentFilters.keyword.trim() !== '') {
        const kw = currentFilters.keyword.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(kw);
        const matchLoc = item.location.toLowerCase().includes(kw);
        const matchTag = item.tags.some(t => t.toLowerCase().includes(kw));
        if (!matchTitle && !matchLoc && !matchTag) return false;
      }
      return true;
    });

    // Update Category Counts
    updateCounts();

    // Clear grid
    propertyGrid.innerHTML = '';

    if (filtered.length === 0) {
      noPropMsg.classList.remove('hidden');
    } else {
      noPropMsg.classList.add('hidden');
      filtered.forEach(item => {
        const isFav = favoriteIds.includes(item.id);
        const cardEl = document.createElement('div');
        cardEl.className = 'property-card';
        cardEl.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='${item.fallbackImg}'">
            <div class="card-badges">
              <span class="badge badge-trans">${item.transType}</span>
              ${item.tags.includes('급매') ? '<span class="badge badge-urgent">급매물</span>' : ''}
              <span class="badge badge-tag">${item.category}</span>
            </div>
            <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="관심매물 저장">
              <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
            </button>
          </div>
          <div class="card-body">
            <div class="card-price-row">
              <span class="price-type">${item.transType}</span>
              <span class="price-value">${item.priceDisplay}</span>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <div class="card-specs">
              <span class="spec-item"><i class="fa-solid fa-ruler-combined"></i> ${item.area}</span>
            </div>
            <div class="card-specs">
              <span class="spec-item"><i class="fa-solid fa-bed"></i> ${item.specs}</span>
            </div>
            <div class="card-location">
              <i class="fa-solid fa-location-dot"></i> ${item.location}
            </div>
            <div class="card-footer-btns">
              <button class="btn-card-detail" data-id="${item.id}">상세보기 <i class="fa-solid fa-arrow-right"></i></button>
              <a href="tel:01048208888" class="btn-card-call" title="즉시 문의"><i class="fa-solid fa-phone"></i></a>
            </div>
          </div>
        `;
        propertyGrid.appendChild(cardEl);
      });
    }
  }

  function updateCounts() {
    countAll.textContent = propertiesData.length;
    countApt.textContent = propertiesData.filter(i => i.category === '아파트').length;
    countRedev.textContent = propertiesData.filter(i => i.category === '재개발/입주권').length;
    countComm.textContent = propertiesData.filter(i => i.category === '상가/사무실').length;
    countOfficetel.textContent = propertiesData.filter(i => i.category === '오피스텔').length;
  }

  // ================= 4. FILTER CONTROLLER EVENTS =================
  // Transaction type tabs
  transTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      transTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilters.transType = tab.dataset.type;
      renderProperties();
    });
  });

  // Category filter buttons
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.categoryBtn = btn.dataset.category;
      renderProperties();
    });
  });

  // Submit Search
  btnSearchSubmit.addEventListener('click', () => {
    currentFilters.district = selectDistrict.value;
    currentFilters.propType = selectPropType.value;
    currentFilters.price = selectPrice.value;
    currentFilters.keyword = inputKeyword.value;
    renderProperties();
  });

  // Enter Key on search keyword
  inputKeyword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      btnSearchSubmit.click();
    }
  });

  // Quick Tags
  quickTagBtns.forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      const tagText = tagBtn.dataset.tag;
      inputKeyword.value = tagText;
      currentFilters.keyword = tagText;
      renderProperties();
    });
  });

  // Reset Search
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      currentFilters = {
        transType: 'all',
        district: 'all',
        propType: 'all',
        price: 'all',
        keyword: '',
        categoryBtn: 'all'
      };
      selectDistrict.value = 'all';
      selectPropType.value = 'all';
      selectPrice.value = 'all';
      inputKeyword.value = '';
      transTabs.forEach(t => t.classList.remove('active'));
      transTabs[0].classList.add('active');
      categoryBtns.forEach(b => b.classList.remove('active'));
      categoryBtns[0].classList.add('active');
      renderProperties();
    });
  }

  // Favorites click delegate
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.favorite-btn');
    if (favBtn) {
      const id = parseInt(favBtn.dataset.id);
      if (favoriteIds.includes(id)) {
        favoriteIds = favoriteIds.filter(fId => fId !== id);
        showToast("관심 매물 목록에서 삭제되었습니다.");
      } else {
        favoriteIds.push(id);
        showToast("관심 매물로 등록되었습니다! (♥)");
      }
      localStorage.setItem('gwangmyeong_favs', JSON.stringify(favoriteIds));
      renderProperties();
    }
  });

  // ================= 5. MODAL DIALOG CONTROLLER =================
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.btn-card-detail');
    if (detailBtn) {
      const id = parseInt(detailBtn.dataset.id);
      openModal(id);
    }
  });

  function openModal(propId) {
    const item = propertiesData.find(p => p.id === propId);
    if (!item) return;

    modalBody.innerHTML = `
      <div class="modal-header-section">
        <div class="card-badges" style="position:relative; top:0; left:0; margin-bottom:10px;">
          <span class="badge badge-trans">${item.transType}</span>
          <span class="badge badge-tag">${item.category}</span>
          <span class="badge" style="background:#0F2C59; color:white;"><i class="fa-solid fa-location-dot"></i> ${item.district}</span>
        </div>
        <div class="modal-price-tag">${item.transType} ${item.priceDisplay}</div>
        <h2 class="modal-title-text">${item.title}</h2>
        <p style="color:var(--text-muted); font-size:0.95rem;"><i class="fa-solid fa-map-pin"></i> ${item.location}</p>
      </div>

      <div class="modal-gallery-main">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='${item.fallbackImg}'">
      </div>

      <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:12px; color:var(--primary-navy);"><i class="fa-solid fa-list-check"></i> 상세매물 정보</h3>
      <table class="modal-detail-table">
        <tbody>
          <tr>
            <th>거래종류</th>
            <td>${item.transType}</td>
            <th>매물유형</th>
            <td>${item.category}</td>
          </tr>
          <tr>
            <th>공급/전용면적</th>
            <td>${item.area}</td>
            <th>구조 / 방향</th>
            <td>${item.specs}</td>
          </tr>
          <tr>
            <th>관리비</th>
            <td>${item.maintenanceFee}</td>
            <th>주차 대수</th>
            <td>${item.parking}</td>
          </tr>
          <tr>
            <th>입주가능일</th>
            <td colspan="3">${item.moveInDate}</td>
          </tr>
        </tbody>
      </table>

      <div class="agent-comment-box">
        <h4><i class="fa-solid fa-user-tie"></i> 대표 공인중개사 추천 의견</h4>
        <p style="font-size:0.98rem; color:var(--text-main); line-height:1.6;">"${item.description}"</p>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <a href="tel:01048208888" class="btn btn-primary" style="flex:1; text-align:center;">
          <i class="fa-solid fa-phone"></i> 즉시 전화 문의 (010-4820-8888)
        </a>
        <button class="btn btn-gold" id="btn-modal-inquire" style="flex:1;">
          <i class="fa-solid fa-envelope"></i> 이 매물 상담 신청하기
        </button>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Inquire button inside modal
    const btnInquire = document.getElementById('btn-modal-inquire');
    if (btnInquire) {
      btnInquire.addEventListener('click', () => {
        closeModal();
        const contactSec = document.getElementById('contact-section');
        contactSec.scrollIntoView({ behavior: 'smooth' });
        const msgInput = document.getElementById('user-message');
        if (msgInput) {
          msgInput.value = `[매물 문의] ${item.title} (${item.priceDisplay})에 대해 궁금합니다.`;
          msgInput.focus();
        }
      });
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // ================= 6. MOBILE DRAWER NAVIGATION =================
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }
  if (mobileCloseBtn && mobileDrawer) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });

  // ================= 7. REAL ESTATE FEE & LOAN CALCULATOR =================
  // Toggle rent input visibility
  const radiosTransType = document.querySelectorAll('input[name="calc-trans-type"]');
  radiosTransType.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'rent') {
        groupCalcRent.classList.remove('hidden');
        labelCalcPrice.textContent = '보증금 (만원)';
      } else {
        groupCalcRent.classList.add('hidden');
        labelCalcPrice.textContent = '거래 금액 (만원)';
      }
    });
  });

  // Calculate Fee
  btnCalcFee.addEventListener('click', () => {
    const pType = calcPropType.value;
    const transType = document.querySelector('input[name="calc-trans-type"]:checked').value;
    const priceVal = parseFloat(calcPrice.value) || 0;
    const rentVal = parseFloat(calcRent.value) || 0;

    if (priceVal <= 0) {
      showToast("거래 금액을 정확히 입력해주세요.");
      return;
    }

    let calculatedFee = 0;
    let rateText = "0.4%";

    if (pType === 'housing') {
      if (transType === 'trade') {
        if (priceVal < 5000) { rateText = "0.6%"; calculatedFee = Math.min(priceVal * 10000 * 0.006, 250000); }
        else if (priceVal < 20000) { rateText = "0.5%"; calculatedFee = Math.min(priceVal * 10000 * 0.005, 800000); }
        else if (priceVal < 90000) { rateText = "0.4%"; calculatedFee = priceVal * 10000 * 0.004; }
        else if (priceVal < 120000) { rateText = "0.5%"; calculatedFee = priceVal * 10000 * 0.005; }
        else if (priceVal < 150000) { rateText = "0.6%"; calculatedFee = priceVal * 10000 * 0.006; }
        else { rateText = "0.7%"; calculatedFee = priceVal * 10000 * 0.007; }
      } else if (transType === 'jeonse') {
        if (priceVal < 5000) { rateText = "0.5%"; calculatedFee = Math.min(priceVal * 10000 * 0.005, 200000); }
        else if (priceVal < 10000) { rateText = "0.4%"; calculatedFee = Math.min(priceVal * 10000 * 0.004, 300000); }
        else if (priceVal < 60000) { rateText = "0.3%"; calculatedFee = priceVal * 10000 * 0.003; }
        else if (priceVal < 120000) { rateText = "0.4%"; calculatedFee = priceVal * 10000 * 0.004; }
        else { rateText = "0.5%"; calculatedFee = priceVal * 10000 * 0.005; }
      } else { // rent
        let totalVal = priceVal + (rentVal * 100);
        if (totalVal < 5000) { totalVal = priceVal + (rentVal * 70); }
        rateText = "0.4%";
        calculatedFee = totalVal * 10000 * 0.004;
      }
    } else { // commercial
      rateText = "0.9% 이하 협의";
      if (transType === 'rent') {
        let totalVal = priceVal + (rentVal * 100);
        calculatedFee = totalVal * 10000 * 0.009;
      } else {
        calculatedFee = priceVal * 10000 * 0.009;
      }
    }

    resRate.textContent = rateText;
    resMaxFee.textContent = Math.round(calculatedFee).toLocaleString('ko-KR') + " 원";
    calcResultBox.classList.remove('hidden');
  });

  // Calculate Loan LTV
  btnCalcLoan.addEventListener('click', () => {
    const ltvRatio = parseFloat(loanHouseStatus.value);
    const housePrice = parseFloat(loanHousePrice.value) || 0;

    if (housePrice <= 0) {
      showToast("아파트 시세 또는 매매가를 입력해주세요.");
      return;
    }

    const estAmount = housePrice * ltvRatio;
    resLoanLtv.textContent = (ltvRatio * 100) + "%";
    resLoanAmount.textContent = Math.round(estAmount).toLocaleString('ko-KR') + " 만원 (약 " + (estAmount / 10000).toFixed(2) + "억원)";
    loanResultBox.classList.remove('hidden');
  });

  // ================= 8. CONSULTATION FORM SUBMISSION =================
  consultForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userPhone = document.getElementById('user-phone').value;

    showToast(`[접수 완료] ${userName} 고객님, 10분 내로 전문 중개사가 연락드리겠습니다!`);
    consultForm.reset();
  });

  // Bookmark page button
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      showToast("Ctrl + D 키를 누르시면 즐겨찾기에 등록됩니다!");
    });
  }

  // Toast Helper
  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 4000);
  }

  // ================= 9. KAKAOTALK AI CHATBOT LOGIC =================
  const kakaoToggleBtn = document.getElementById('kakao-ai-toggle-btn');
  const kakaoChatWindow = document.getElementById('kakao-ai-chat-window');
  const kakaoMinimizeBtn = document.getElementById('kakao-chat-minimize');
  const kakaoCloseBtn = document.getElementById('kakao-chat-close');
  const kakaoChatMessages = document.getElementById('kakao-chat-messages');
  const kakaoChatForm = document.getElementById('kakao-chat-form');
  const kakaoChatInput = document.getElementById('kakao-chat-input');
  const aiTypingIndicator = document.getElementById('ai-typing-indicator');
  const initMsgTime = document.getElementById('init-msg-time');

  if (initMsgTime) {
    const now = new Date();
    initMsgTime.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  if (kakaoToggleBtn && kakaoChatWindow) {
    kakaoToggleBtn.addEventListener('click', () => {
      kakaoChatWindow.classList.toggle('hidden');
      if (!kakaoChatWindow.classList.contains('hidden')) {
        kakaoChatInput.focus();
      }
    });

    if (kakaoMinimizeBtn) {
      kakaoMinimizeBtn.addEventListener('click', () => {
        kakaoChatWindow.classList.add('hidden');
      });
    }

    if (kakaoCloseBtn) {
      kakaoCloseBtn.addEventListener('click', () => {
        kakaoChatWindow.classList.add('hidden');
      });
    }
  }

  // Quick chips & form submit
  document.addEventListener('click', (e) => {
    const chipBtn = e.target.closest('.chip-btn');
    if (chipBtn) {
      const query = chipBtn.dataset.query;
      handleUserSendMessage(query);
    }
  });

  if (kakaoChatForm) {
    kakaoChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = kakaoChatInput.value.trim();
      if (query) {
        handleUserSendMessage(query);
        kakaoChatInput.value = '';
      }
    });
  }

  function handleUserSendMessage(userText) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Append User Message
    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chat-msg user-msg';
    userMsgEl.innerHTML = `
      <div class="msg-content-wrapper">
        <div class="msg-bubble">${escapeHtml(userText)}</div>
        <span class="msg-time">${timeStr}</span>
      </div>
    `;
    kakaoChatMessages.appendChild(userMsgEl);
    scrollToBottomChat();

    // Show Typing Indicator
    if (aiTypingIndicator) {
      aiTypingIndicator.classList.remove('hidden');
      kakaoChatMessages.appendChild(aiTypingIndicator);
      scrollToBottomChat();
    }

    // Simulate AI Response Delay
    setTimeout(() => {
      if (aiTypingIndicator) aiTypingIndicator.classList.add('hidden');
      const botReplyHtml = generateAiResponse(userText);
      
      const botMsgEl = document.createElement('div');
      botMsgEl.className = 'chat-msg bot-msg';
      botMsgEl.innerHTML = `
        <div class="bot-profile">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="msg-content-wrapper">
          <span class="sender-name">광명리더스 AI 비서</span>
          <div class="msg-bubble">${botReplyHtml}</div>
          <span class="msg-time">${timeStr}</span>
        </div>
      `;
      kakaoChatMessages.appendChild(botMsgEl);
      scrollToBottomChat();
    }, 700);
  }

  // Right-Side KakaoTalk Launch Button Click Handler
  const btnLaunchKakaoRight = document.getElementById('btn-launch-kakao-right');
  if (btnLaunchKakaoRight && kakaoChatWindow) {
    btnLaunchKakaoRight.addEventListener('click', () => {
      kakaoChatWindow.classList.remove('hidden');
      kakaoChatInput.focus();
      showToast("카카오톡 1:1 라이브 AI 상담 창이 열렸습니다! 😊");
    });
  }

  function generateAiResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('추천') || q.includes('매물') || q.includes('인기')) {
      return `현재 <strong>광명시 인기 추천 매물</strong> 8선이 메인 페이지에 업데이트되어 있습니다! 🏢<br><br>
              - <strong>철산래미안자이 84㎡</strong>: 10억 8천만원 (급매/올확장)<br>
              - <strong>유플래닛 광명데시앙</strong>: 전세 7억 5천만원 (안양천 뷰)<br>
              - <strong>광명뉴타운 11구역 입주권</strong>: 6억 2천만원<br><br>
              [핵심 추천 매물] 메뉴로 이동하시면 상세 정보를 확인하실 수 있습니다.`;
    }

    if (q.includes('철산') || q.includes('시세') || q.includes('하안') || q.includes('소하') || q.includes('일직') || q.includes('광명동')) {
      return `광명시 주요 지역 <strong>2026년 최신 아파트 시세동향</strong> 안내입니다: 🏙️<br><br>
              • <strong>철산동(7호선 역세권)</strong>: 84㎡ 기준 매매 10억 ~ 12.5억 / 전세 5.5억 ~ 7억<br>
              • <strong>일직동(KTX광명역)</strong>: 84㎡ 기준 매매 11.5억 ~ 14.5억 / 전세 6.8억 ~ 8억<br>
              • <strong>하안동(재건축 추진)</strong>: 59㎡ 기준 매매 5억 ~ 6.5억 / 전세 3억 ~ 4억<br><br>
              상세 단지별 실거래가는 📞 <strong>02-2610-8949</strong> 로 문의해주시면 즉시 조회해 드립니다.`;
    }

    if (q.includes('재개발') || q.includes('뉴타운') || q.includes('입주권')) {
      return `<strong>광명뉴타운 재개발 추진 현황</strong> 안내입니다: 📈<br><br>
              - <strong>11구역 (대장주)</strong>: 이주 진행 중, 전용 84㎡ 배정 입주권 매물 보유<br>
              - <strong>12구역 (철산역 도보권)</strong>: 철산역 초역세권 사업시행인가 단계<br>
              - <strong>9, 10구역</strong>: 착공 및 분양 순항 중<br><br>
              조합원 권수가, 감정평가액, 프리미엄 비교분석표가 필요하시면 1:1 상담을 신청해 주세요!`;
    }

    if (q.includes('복비') || q.includes('계산') || q.includes('대출') || q.includes('ltv')) {
      return `저희 홈페이지 <strong>'스마트 부동산 복비 & 대출 계산기'</strong>를 통해 1초 만에 법정 상한 요율과 대출 한도를 계산하실 수 있습니다! 🧮<br><br>
              • 주택 매매: 5억~9억 (0.4%), 9억~12억 (0.5%) 상한 요율 적용<br>
              • 주택담보대출: 무주택자 LTV 최대 70~80% 적용<br><br>
              화면 상단 [시세/중개보수 계산기] 버튼을 클릭해 직접 계산해 보세요!`;
    }

    if (q.includes('위치') || q.includes('주차') || q.includes('주소') || q.includes('오시는')) {
      return `📍 <strong>광명리더스 공인중개사사무소 위치 안내</strong><br><br>
              • <strong>주소</strong>: 경기도 광명시 오리로 854 센트럴타워 1층 102호<br>
              • <strong>지하철</strong>: 7호선 철산역 1번 출구 도보 3분<br>
              • <strong>주차</strong>: 건물 지하 주차장 <strong>2시간 무료 주차</strong> 지원! 편하게 차량으로 방문하세요.`;
    }

    if (q.includes('전화') || q.includes('상담') || q.includes('연락') || q.includes('대표')) {
      return `📞 <strong>광명리더스 직통 상담 연결</strong><br><br>
              • 대표전화: <a href="tel:01048208888" style="color:#0F2C59; font-weight:bold; text-decoration:underline;">010-4820-8888</a><br>
              • 대표중개사 직통: <a href="tel:01048208888" style="color:#0F2C59; font-weight:bold; text-decoration:underline;">010-4820-8888</a><br><br>
              영업시간: 평일 09:00 - 20:00 (주말/공휴일 정상영업)입니다. 지금 바로 전화 연결 가능합니다!`;
    }

    return `문의해 주셔서 감사합니다! 😊<br>
            고객님께서 찾으시는 <strong>'${escapeHtml(query)}'</strong> 조건에 적합한 최적의 실매물을 빠르게 찾아드리겠습니다.<br><br>
            자세한 1:1 친절 상담은 대표번호 📞 <strong>010-4820-8888</strong> 로 전화주시거나, 아래 <strong>1:1 상담 신청 폼</strong>을 작성해 주시면 10분 내로 연락드리겠습니다!`;
  }

  function scrollToBottomChat() {
    kakaoChatMessages.scrollTop = kakaoChatMessages.scrollHeight;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Initial Render
  renderProperties();
});
