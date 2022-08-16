PGDMP     )                    z            productfeedback    11.0    14.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            !           1262    24634    productfeedback    DATABASE     k   CREATE DATABASE productfeedback WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Ghana.1252';
    DROP DATABASE productfeedback;
                HassanatuAh    false            �            1259    24650    comments    TABLE     �   CREATE TABLE public.comments (
    id integer NOT NULL,
    content text NOT NULL,
    user_id integer NOT NULL,
    product_id bigint
);
    DROP TABLE public.comments;
       public            HassanatuAh    false            �            1259    24648    comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.comments_id_seq;
       public          HassanatuAh    false    199            "           0    0    comments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
          public          HassanatuAh    false    198            �            1259    24661    product_features    TABLE     �   CREATE TABLE public.product_features (
    id bigint NOT NULL,
    title text NOT NULL,
    category text NOT NULL,
    upvotes integer,
    status text NOT NULL,
    description text NOT NULL
);
 $   DROP TABLE public.product_features;
       public            HassanatuAh    false            �            1259    24659    product_features_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_features_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.product_features_id_seq;
       public          HassanatuAh    false    201            #           0    0    product_features_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.product_features_id_seq OWNED BY public.product_features.id;
          public          HassanatuAh    false    200            �            1259    24670    replies    TABLE     �   CREATE TABLE public.replies (
    content text NOT NULL,
    replying_to text NOT NULL,
    user_id integer NOT NULL,
    id integer
);
    DROP TABLE public.replies;
       public            HassanatuAh    false            �            1259    24639    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    username text NOT NULL,
    image text,
    password text NOT NULL,
    email text
);
    DROP TABLE public.users;
       public            HassanatuAh    false            �            1259    24637    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          HassanatuAh    false    197            $           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          HassanatuAh    false    196            �
           2604    24653    comments id    DEFAULT     j   ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);
 :   ALTER TABLE public.comments ALTER COLUMN id DROP DEFAULT;
       public          HassanatuAh    false    198    199    199            �
           2604    24664    product_features id    DEFAULT     z   ALTER TABLE ONLY public.product_features ALTER COLUMN id SET DEFAULT nextval('public.product_features_id_seq'::regclass);
 B   ALTER TABLE public.product_features ALTER COLUMN id DROP DEFAULT;
       public          HassanatuAh    false    201    200    201            �
           2604    24642    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          HassanatuAh    false    196    197    197                      0    24650    comments 
   TABLE DATA           D   COPY public.comments (id, content, user_id, product_id) FROM stdin;
    public          HassanatuAh    false    199   H                 0    24661    product_features 
   TABLE DATA           ]   COPY public.product_features (id, title, category, upvotes, status, description) FROM stdin;
    public          HassanatuAh    false    201   �                 0    24670    replies 
   TABLE DATA           D   COPY public.replies (content, replying_to, user_id, id) FROM stdin;
    public          HassanatuAh    false    202   C                  0    24639    users 
   TABLE DATA           K   COPY public.users (id, name, username, image, password, email) FROM stdin;
    public          HassanatuAh    false    197   �        %           0    0    comments_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.comments_id_seq', 7, true);
          public          HassanatuAh    false    198            &           0    0    product_features_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.product_features_id_seq', 4, true);
          public          HassanatuAh    false    200            '           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          HassanatuAh    false    196            �
           2606    24658    comments comments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            HassanatuAh    false    199            �
           2606    24669 &   product_features product_features_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.product_features
    ADD CONSTRAINT product_features_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.product_features DROP CONSTRAINT product_features_pkey;
       public            HassanatuAh    false    201            �
           2606    24647    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            HassanatuAh    false    197            �
           2606    24676    comments comments_user_id_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 H   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_user_id_fkey;
       public          HassanatuAh    false    2709    197    199            �
           2606    24686    replies replies_user_id_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.replies
    ADD CONSTRAINT replies_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 F   ALTER TABLE ONLY public.replies DROP CONSTRAINT replies_user_id_fkey;
       public          HassanatuAh    false    197    2709    202               <   x�3�I-.�4�4�2�L�� ǐ˜�$#�X��(?�4�D�L��O�4�4����� ���         �   x�U�;�0Dk�[��o!@O���%�����@$�3���To-U�B.�<�s�8�HUm6[%�{�;Sg��B5���	�KX`)'b�LtѐT6c�����k��j ��ӄ�A����u<���>����`r�,�<b ˃

^ޝ�vZ�'4M         :   x�+�H��.VH�/R(��,�,M�4���*A�PH���M�+�L�HL�4������ �)9         a   x�3�LJ�I,JLJ1`���TΌ����\�?.#���4�1�@�Ɯɉ9�I�$X��R`�Y�_
�&Hҕ�@ uH�M��������� �8.�     