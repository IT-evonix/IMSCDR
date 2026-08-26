--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    id integer NOT NULL,
    name text,
    email text NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'Administrator'::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admins_id_seq OWNER TO postgres;

--
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    type text DEFAULT 'NewsEvent'::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: news_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_events (
    id integer NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    "contentType" text DEFAULT 'News'::text NOT NULL,
    category text DEFAULT 'Academic News'::text NOT NULL,
    "startDate" timestamp(3) without time zone,
    "endDate" timestamp(3) without time zone,
    summary text,
    "contentFormat" text DEFAULT 'description'::text NOT NULL,
    "contentHtml" text,
    "pdfUrl" text,
    "thumbnailUrl" text DEFAULT '/images/home/black_logo.webp'::text NOT NULL,
    images text[] DEFAULT ARRAY[]::text[],
    status text DEFAULT 'Published'::text NOT NULL,
    "adminId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "deletedAt" timestamp(3) without time zone
);


ALTER TABLE public.news_events OWNER TO postgres;

--
-- Name: news_events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_events_id_seq OWNER TO postgres;

--
-- Name: news_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_events_id_seq OWNED BY public.news_events.id;


--
-- Name: refresh_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.refresh_tokens (
    id integer NOT NULL,
    token text NOT NULL,
    "adminId" integer NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.refresh_tokens OWNER TO postgres;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.refresh_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.refresh_tokens_id_seq OWNER TO postgres;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.refresh_tokens_id_seq OWNED BY public.refresh_tokens.id;


--
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: news_events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_events ALTER COLUMN id SET DEFAULT nextval('public.news_events_id_seq'::regclass);


--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('public.refresh_tokens_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
af2ac97a-ed49-41a7-a559-e3764b28b98f	34a70dcb19447afe23d5f2c1d48034c68ff22af049070dfdff047748807569c5	2026-08-01 15:11:03.386997+05:30	20260801000001_admin_table		\N	2026-08-01 15:11:03.386997+05:30	0
6c7e6362-7dd0-400d-932b-6c97a0ea3ab4	03f5cabc0b96cc642b3e6bc4ebb54f66cc7466154c5f8307297920ed3e7833d1	2026-08-01 16:01:11.026009+05:30	20260801000002_news_events		\N	2026-08-01 16:01:11.026009+05:30	0
14c00097-1308-4e56-9da4-e2af1fdd6c30	28ff1ebd4f61a33198559c930af554d11ede98cd1ddca5916d3019a697ce91ad	2026-08-01 16:08:50.341057+05:30	20260801000003_indexes		\N	2026-08-01 16:08:50.341057+05:30	0
ab6f21cb-8234-48c6-b7cb-37954059dc50	3af0d203cb05fcfb02217d97b39881633fe8d64af7fdc6fd371f4848bc89bac9	2026-08-01 16:22:14.907709+05:30	0_init		\N	2026-08-01 16:22:14.907709+05:30	0
67f9d78d-f069-4019-bf51-c8859a85ca86	6c680a7e047b7dfc346f89c90fbb47d049fdd0b74bab29c78692156ecd26496c	2026-08-01 16:23:47.002291+05:30	01_create_admins_table		\N	2026-08-01 16:23:47.002291+05:30	0
181482b4-66d1-454f-a10b-e2372e671d5c	e0d9a351e0c49053dde82c9e0bbca44b3f0193255223d43c377866d3c833e0c6	2026-08-01 16:23:49.605149+05:30	02_create_refresh_tokens_table		\N	2026-08-01 16:23:49.605149+05:30	0
6c779876-e1c5-4628-a72c-53b50eb16d7c	ccb894dca2d19a27bd5e7633ef9d2d8bbca82187e8519559c651bbc32f5a7441	2026-08-01 16:23:52.044588+05:30	03_create_news_events_table		\N	2026-08-01 16:23:52.044588+05:30	0
\.


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (id, name, email, password, role, "createdAt", "updatedAt") FROM stdin;
1	System Administrator	admin@evonix.co	$2b$10$7/mjMBTfQgHv2a6ywE238umrH0esgwsLYzNI5b9BW6FT9VMJI6Iua	Administrator	2026-08-01 09:40:46.319	2026-08-01 14:37:29.227
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, slug, type, "createdAt", "updatedAt") FROM stdin;
1	Academic News	academic-news	NewsEvent	2026-08-01 13:59:43.605	2026-08-01 13:59:43.605
3	Announcements	announcements	NewsEvent	2026-08-01 13:59:43.605	2026-08-01 13:59:43.605
4	Events & Workshops	events-workshops	NewsEvent	2026-08-01 13:59:43.605	2026-08-01 13:59:43.605
5	testing	testing	NewsEvent	2026-08-01 14:02:25.615	2026-08-01 14:02:25.615
2	Campus Life	campus-life	Blog	2026-08-01 13:59:43.605	2026-08-01 14:09:16.456
\.


--
-- Data for Name: news_events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_events (id, title, slug, "contentType", category, "startDate", "endDate", summary, "contentFormat", "contentHtml", "pdfUrl", "thumbnailUrl", images, status, "adminId", "createdAt", "updatedAt", "deletedAt") FROM stdin;
2	testing	testing	News	Academic News	\N	\N	testing	pdf	\N	/pdf/news-and-events/Feedback-Analysis.pdf	/images/news-and-events/newsandevents.webp	{}	Archived	1	2026-08-01 12:01:52.149	2026-08-01 12:56:48.724	2026-08-01 12:33:08.91
3	Testing Pdf	testing-pdf	News	Academic News	2026-08-14 00:00:00	2026-08-28 00:00:00	Testing Pdf	pdf	\N	/uploads/pdfs/pdf-1785591512426-1670.pdf	/uploads/images/img-1785587630101-554431.jpeg	{/uploads/images/img-1785587630101-554431.jpeg}	Published	1	2026-08-01 12:33:55.906	2026-08-01 13:38:34.946	\N
1	Bhupendra	bhupendra	Event	Academic News	2026-08-18 00:00:00	2026-08-26 00:00:00	Hello UTS TEting to work on them	description	<p>Hello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;themHello&nbsp;UTS&nbsp;TEting&nbsp;to&nbsp;work&nbsp;on&nbsp;them</p>	\N	/uploads/images/img-1785588068394-401949.PNG	{/uploads/images/img-1785588068394-401949.PNG}	Published	1	2026-08-01 10:43:59.033	2026-08-01 14:23:00.432	\N
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.refresh_tokens (id, token, "adminId", "expiresAt", "createdAt") FROM stdin;
6	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzg1NTk3MTUxLCJleHAiOjE3ODYyMDE5NTF9.b0_-BhP8_RVsxSIrCfke-H86QPCL79_YOV2lokkC1cE	1	2026-08-08 15:12:31.456	2026-08-01 15:12:31.851
\.


--
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_id_seq', 2, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 6, true);


--
-- Name: news_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_events_id_seq', 3, true);


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.refresh_tokens_id_seq', 6, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: news_events news_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_events
    ADD CONSTRAINT news_events_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: admins_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX admins_email_key ON public.admins USING btree (email);


--
-- Name: categories_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name);


--
-- Name: categories_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX categories_slug_key ON public.categories USING btree (slug);


--
-- Name: news_events_category_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX news_events_category_idx ON public.news_events USING btree (category);


--
-- Name: news_events_contentType_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "news_events_contentType_idx" ON public.news_events USING btree ("contentType");


--
-- Name: news_events_createdAt_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "news_events_createdAt_idx" ON public.news_events USING btree ("createdAt" DESC);


--
-- Name: news_events_deletedAt_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "news_events_deletedAt_idx" ON public.news_events USING btree ("deletedAt");


--
-- Name: news_events_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX news_events_slug_key ON public.news_events USING btree (slug);


--
-- Name: refresh_tokens_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX refresh_tokens_token_key ON public.refresh_tokens USING btree (token);


--
-- Name: news_events news_events_adminId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_events
    ADD CONSTRAINT "news_events_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES public.admins(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: refresh_tokens refresh_tokens_adminId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT "refresh_tokens_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES public.admins(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

